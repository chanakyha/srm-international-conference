import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  collection,
  doc,
  getCountFromServer,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db, storage } from "@/backend/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useSession } from "next-auth/react";
import { Progress } from "../ui/progress";

interface TrackProps {
  title: string;
  value: string;
}
[];

const TRACKLIST: TrackProps[] = [
  {
    title: "Intelligent Information Systems",
    value: "Intelligent Information Systems",
  },
  {
    title: "Bio - Engineering",
    value: "Bio - Engineering",
  },
  {
    title: "Blockchain Technology",
    value: "Blockchain Technology",
  },
  {
    title: "Ubiquitous Computing & Communications",
    value: "Ubiquitous Computing & Communications",
  },
  {
    title: "Smart Network Science",
    value: "Smart Network Science",
  },
  {
    title: "Computatinal Vision",
    value: "Computatinal Vision",
  },
  {
    title: "Computing Models and Applications",
    value: "Computing Models and Applications",
  },
];

const AddPaperDialog = () => {
  const { data: session } = useSession();
  const [track, setTrack] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const changeHandler = (e: any) => {
    if (e.target.files.length > 0) {
      let filename = e.target.files[0].name;
      console.log(filename);
      setFileName(filename);
    }
  };

  const getSubmissionId = async () => {
    const initialVal = 230001;
    const coll = collection(db, "papers");
    const snapshot = await getCountFromServer(coll);

    return `IC${initialVal + snapshot.data().count}`;
  };

  const addNewPaper = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    console.log(e.target[0]?.files);
    const paper: any = e.target[0]?.files[0];
    if (!paper) return;
    const storageRef = ref(storage, `papers/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, paper);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log(`Upload is ${progress}% done`);
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          var newPaper = {
            title: e.target[1].value.trim(),
            abstract: e.target[2].value.trim(),
            keywords: e.target[3].value.trim(),
            track: track,
            status: "review",
            paid: false,
            createdAt: serverTimestamp(),
            fileUrl: downloadURL,
          };
          if (
            !newPaper.title ||
            !newPaper.abstract ||
            !newPaper.keywords ||
            !newPaper.track
          ) {
            setLoading(false);
            alert("Please fill all the fields");
          } else {
            const submissionId = await getSubmissionId();
            const docRef = doc(db, "papers", submissionId);
            await setDoc(
              docRef,
              {
                ...newPaper,
                assignedReviewerName: "",
                assignedReviewerEmail: "",
                firstAuthor: session?.user?.email!,
                comments: [],
              },
              { merge: true }
            )
              .then(() => {
                const docRef = doc(db, "users", session?.user?.email!);
                setDoc(
                  docRef,
                  { paperUpload: true, paperId: submissionId, firstAuthor: true },
                  { merge: true }
                );
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
                setOpen(false);
                setLoading(false);
              });
            console.log(newPaper);
            setOpen(false);
            setLoading(false);
            alert("Paper Added");
          }
        });
      }
    );
  };
  return (
    <div suppressHydrationWarning>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button className="font-semibold" variant={"default"}>
            Upload Paper
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Paper</DialogTitle>
            <DialogDescription>
              <form onSubmit={(e) => addNewPaper(e)}>
                <section className="mt-4 flex flex-col gap-4">
                  <div>
                    <div className="flex flex-col justify-center w-full">
                      <Label htmlFor="message">Upload File</Label>
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          {fileName ? (
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {fileName}
                            </p>
                          ) : (
                            <>
                              <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                PDF (MAX. 15MB)
                              </p>
                            </>
                          )}
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          onChange={changeHandler}
                          className="hidden"
                          accept="application/pdf"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      type="text"
                      id="title"
                      placeholder="Title of the Paper"
                    />
                  </div>
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="abstract">Abstract</Label>
                    <Textarea
                      placeholder="Abstract of the Paper"
                      id="abstract"
                    />
                  </div>
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="keyword">Keywords</Label>
                    <Textarea
                      placeholder="Keywords (seperated by comma)"
                      id="keyword"
                    />
                  </div>
                  <div>
                    <Label>Track</Label>
                    <Select onValueChange={(e) => setTrack(e)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select Track" />
                      </SelectTrigger>
                      <SelectContent>
                        {TRACKLIST.map((track, idx) => (
                          <SelectItem key={idx} value={track.value}>
                            {track.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {/* <DialogTrigger asChild> */}
                  <Button type="submit" className="w-full">
                    {loading ? "Uploading..." : "Upload"}
                  </Button>
                  {progress > 0 && (
                    <Progress value={progress} className="w-full" />
                  )}
                  {/* </DialogTrigger> */}
                </section>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPaperDialog;
