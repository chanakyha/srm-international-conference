import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/backend/firebase";

const ConfirmPaperRejectAlert = ({id}:any) => {

      const updatePaperStatus = async() => {
    // update paper status
    const paperRef = doc(db, "papers", id);
    await updateDoc(paperRef, {
      status: "rejected",
    }).then(() => {
      alert("Paper rejected successfully!");
    }).catch((error) => {
      console.error("Error updating document: ", error);
    });
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant={"outline"}
            className="text-xs hover:bg-red-500/80 font-semibold"
          >
            Reject
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject Paper?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reject the paper? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => updatePaperStatus()}>Reject</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ConfirmPaperRejectAlert;
