import React from "react";
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
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/backend/firebase";

const AddReveiwersDialog = () => {
  const handleAddReviewer = async(e: any) => {
    e.preventDefault();
    var newReviewer = {
      reviewerName: e.target[0].value.trim(),
      reviewerEmail: e.target[1].value.trim(),
      reviewerOrg: e.target[2].value.trim(),
    };
    if (!newReviewer.reviewerName|| !newReviewer.reviewerEmail || !newReviewer.reviewerOrg) {
      alert("Add all the details");
    }else {
      const docRef = doc(db, "reviewers", newReviewer.reviewerEmail);
      await setDoc(
        docRef,
        { ...newReviewer, assignedPapers:[]},
        { merge: true }
      ).then(() => {
        alert("Reviewer Added Successfully");
      }).catch(() => {
        alert("Error adding document: ");
      });
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button size={"sm"} className="font-semibold">
            Add Reveiwer
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Reveiwer</DialogTitle>
            <DialogDescription>
              <section className="mt-4">
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    handleAddReviewer(e);
                  }}
                >
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Name of the Reveiwer"
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email of Reviewer"
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="Org">Institution/Organization</Label>
                    <Input
                      type="text"
                      id="Org"
                      placeholder="Institution/Organization of Reviewer"
                    />
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

export default AddReveiwersDialog;
