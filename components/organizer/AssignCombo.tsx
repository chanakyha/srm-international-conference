import React, { use, useEffect, useState } from 'react'

import { Check, ChevronsUpDown, UserPlus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { collection, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '@/backend/firebase';
import { Console } from 'console';



const AssignCombo = ({paper}:any) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [reviewers, setReviewers] = useState<any[]>([]);
    const [reviewerEmail, setReviewerEmail] = useState("");

    

    
    
    const updatePaper = async() => {
      const docRef = doc(db, "papers", paper.id)
      const reviewerRef = doc(db, "reviewers", reviewerEmail)
      await setDoc(
        docRef,
        {
          assignedReviewerName: value,
          assignedReviewerEmail: reviewerEmail,
        },
        { merge: true }
        ).then(async() => {
          const assignedPapersList:any = [];
          await getDoc(reviewerRef).then((doc) => {
            assignedPapersList.push(...doc.data()?.assignedPapers)
          }).then(async() => {
            assignedPapersList.push(paper.id)
            console.log(assignedPapersList)
          await setDoc(
            reviewerRef,
            {
              assignedPapers: assignedPapersList
            },
            { merge: true }
            )
          })
        })
      }




      useEffect(() => {
        const colRef = 
        collection(db, "reviewers");
        const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
          const reviewers: any = [];
          querySnapshot.forEach((doc) => {
            reviewers.push({ ...doc.data(), id: doc.id });
          });
          setReviewers(reviewers);
        });
        return () => unsubscribe();
      }, []);
      
    useEffect(() => {
      if (value) {
        updatePaper();
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
        


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          size={"sm"}
          role="combobox"
          aria-expanded={open}
          className="flex justify-between"
        >
          {value
            ? value
            : "Assign"}
          {!value ? <UserPlus className="ml-2 h-4 w-4 shrink-0 opacity-80" /> : ""}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {reviewers.map((reviewer) => (
              <CommandItem
                key={reviewer.reviewerName}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setReviewerEmail(reviewer.reviewerEmail);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === reviewer.reviewerName ? "opacity-100" : "opacity-0"
                  )}
                />
                {reviewer.reviewerName}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default AssignCombo


