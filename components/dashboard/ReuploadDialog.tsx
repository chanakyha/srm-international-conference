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
import { Label } from "@/components/ui/label";
import {
  collection,
  doc,
  getCountFromServer,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "@/backend/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useSession } from "next-auth/react";
import { Progress } from "../ui/progress";

const ReuploadDialog = ({id}:any) => {
    const { data: session } = useSession();
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

    

    const reUploadPaper = async (e: any) => {
      setLoading(true);
      e.preventDefault();
      console.log(e.target[0]?.files);
      const paper: any = e.target[0]?.files[0];
      if (!paper) return;
      const storageRef = ref(storage, `papers/${id}`);
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
                const docRef = doc(db, "papers", id);
                await setDoc(docRef, {
                    fileUrl: downloadURL,
                }, { merge: true })
              
                .then(() => {
                  console.log("Email Logic Here");
                })
                .catch((error) => {
                  console.error("Error writing document: ", error);
                  setOpen(false);
                  setLoading(false);
                });
              setOpen(false);
              setLoading(false);
              alert("Paper Updated Successfully");
          });
        }
      );
    };
  return (
    <div suppressHydrationWarning>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button
            variant={"default"}
            size="sm"
            className="font-semibold"
          >
            Re-Upload
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Re- Upload Paper</DialogTitle>
            <DialogDescription>
              <form onSubmit={(e) => reUploadPaper(e)}>
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

export default ReuploadDialog;
