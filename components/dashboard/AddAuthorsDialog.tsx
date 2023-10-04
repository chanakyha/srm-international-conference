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
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/backend/firebase";



const AddAuthorsDialog = () => {

  const handleAddAuthors = async(e:any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      alert("User does not exist");
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="font-semibold" variant={"outline"}>
            Add Authors
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Authors</DialogTitle>
            <DialogDescription>
              <form
                onSubmit={(e) => handleAddAuthors(e)}
               className="mt-4 flex flex-col gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <div>
                  <Button type="submit" className="w-full">Add</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddAuthorsDialog;
