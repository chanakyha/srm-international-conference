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
import { Textarea } from "../ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/backend/firebase";

const AddCommentsDialog = ({id}:any) => {

    const [reuploadFlag, setReuploadFlag] = useState(false);
    
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
    //   await setDoc(
    //     docRef,
    //     { ...newReviewer, assignedPapers:[]},
    //     { merge: true }
    //   ).then(() => {
    //     alert("Reviewer Added Successfully");
    //   }).catch(() => {
    //     alert("Error adding document: ");
    //   });
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button size={"sm"} className="text-sm" variant={"ghost"}>
            Add Comment
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Comment</DialogTitle>
            <DialogDescription>
              <section className="mt-4">
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    handleAddComment(e);
                  }}
                >
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="comment">Comments</Label>
                    <Textarea
                      id="comment"
                      placeholder="Comments for the paper"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" checked={reuploadFlag} onCheckedChange={(e)=>setReuploadFlag(!reuploadFlag)} />
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
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCommentsDialog;
