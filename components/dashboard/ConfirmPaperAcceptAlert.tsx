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

const ConfirmPaperAcceptAlert = ({id}:any) => {

  const updatePaperStatus = async() => {
    // update paper status
    const paperRef = doc(db, "papers", id);
    await updateDoc(paperRef, {
      status: "accepted",
    }).then(() => {
      alert("Paper accepted successfully!");
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
                      className="text-xs hover:bg-green-500/80 font-semibold"
                    >
                      Accept
                    </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Accept Paper?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to accept the paper? This action cannot be undone.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => updatePaperStatus()}>Accept</AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        </div>
    );
};

export default ConfirmPaperAcceptAlert;
