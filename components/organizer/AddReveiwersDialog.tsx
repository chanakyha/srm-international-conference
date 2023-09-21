import React from 'react';
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

const AddReveiwersDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="font-semibold" variant={"outline"}>
            Add Reveiwer
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Reveiwer</DialogTitle>
            <DialogDescription>
              <section className="mt-4 flex flex-col gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <div>
                  <Button className="w-full">Submit</Button>
                </div>
              </section>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddReveiwersDialog