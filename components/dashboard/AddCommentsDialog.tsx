import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { arrayUnion, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/backend/firebase";


const AddCommentsDialog = ({id}:any) => {

    const [reuploadFlag, setReuploadFlag] = useState(false);
    const [comments, setComments] = useState<any[]>([]);
    
  const handleAddComment = async(e: any) => {
    e.preventDefault();
    var newComment = {
      comments: e.target[0].value.trim(),
      reupload: reuploadFlag,
    };
    if (!newComment.comments ) {
      alert("Add Comments");
    }else {
        setReuploadFlag(false);
        console.log(newComment);
      const docRef = doc(db, "papers", id );
      await updateDoc(docRef, {
        comments: arrayUnion({
            ...newComment,
            createdAt: new Date(),
        }

        ),
      });
    }
  };
  const getComments = async () => {
    const docRef = doc(db, "papers", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setComments(docSnap.data().comments);
    } else {
      setComments([]);
    }
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button size={"sm"} className="text-sm" variant={"ghost"}>
            View / Add
          </Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col">
          <DialogTitle>Comments</DialogTitle>
          <DialogHeader className="max-h-96 overflow-y-scroll">
            {comments.length === 0 && (
              <p className="text-sm text-gray-600">No comments yet</p>
            )}
            {comments.length != 0 &&
              comments.map((comment, idx) => (
                <div
                  key={idx}
                  className="border p-2 rounded flex justify-between items-center"
                >
                  <div>
                    <p>{comment.comments}</p>
                  </div>
                  <div className="text-gray-600 text-xs ">
                    <p>{comment.reupload ? "Re-upload required" : ""}</p>
                  </div>
                </div>
              ))}
          </DialogHeader>
          <DialogFooter className="">
            <DialogDescription className="w-full">
              <section className="mt-4">
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    handleAddComment(e);
                  }}
                >
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="comment">Add comments</Label>
                    <Textarea
                      id="comment"
                      placeholder="Comments for the paper"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={reuploadFlag}
                      onCheckedChange={(e) => setReuploadFlag(!reuploadFlag)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Ask the author to re-upload the paper
                    </label>
                  </div>
                  <div>
                    <DialogTrigger asChild>
                      <Button type="submit" className="w-full">
                        Add
                      </Button>
                    </DialogTrigger>
                  </div>
                </form>
              </section>
            </DialogDescription>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};




export default AddCommentsDialog;



