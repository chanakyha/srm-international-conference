import React, { use, useEffect, useState } from "react";

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
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/backend/firebase";

const AssignCombo = ({ id }: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [reviewers, setReviewers] = useState<any[]>([]);
  const [reviewerEmail, setReviewerEmail] = useState("");

  const updatePaper = async (value: any) => {
    const docRef = doc(db, "papers", id);
    const reviewerRef = doc(db, "reviewers", reviewerEmail);
    await setDoc(
      docRef,
      {
        assignedReviewerName: value,
        assignedReviewerEmail: reviewerEmail,
      },
      { merge: true }
    ).then(async () => {
        setValue("");
      await updateDoc(reviewerRef, {
        assignedPapers: arrayUnion(id),
      });
    });
  };

  useEffect(() => {
    const colRef = collection(db, "reviewers");
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
      updatePaper(value);
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
          className="w-full"
        >
          {value ? value : "Assign"}
          {!value ? (
            <UserPlus className="ml-2 h-4 w-4 shrink-0 opacity-80" />
          ) : (
            ""
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Reveiweres..." />
          <CommandEmpty>No Reviewer found.</CommandEmpty>
          <CommandGroup>
            {reviewers.map((reviewer) => (
              <CommandItem
                key={reviewer.reviewerName}
                onSelect={(currentValue: React.SetStateAction<string>) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setReviewerEmail(reviewer.reviewerEmail);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === reviewer.reviewerName
                      ? "opacity-100"
                      : "opacity-0"
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
};

export default AssignCombo;
