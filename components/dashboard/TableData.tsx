import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { getSession, useSession } from "next-auth/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/backend/firebase";
import AddPaperDialog from "./AddPaperDialog";

const TableData = ({ user, paper }: any) => {
  // console.log(user);

  console.log(paper);

  return (
    <div suppressHydrationWarning className="">
      {paper ? (
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-center w-[150px]">
                Submission ID
              </TableHead>
              <TableHead className="font-bold text-left w-[800px]">
                Paper Title
              </TableHead>
              <TableHead className="font-bold text-center w-[350px]">
                Track
              </TableHead>
              <TableHead className="font-bold text-center w-[200px]">
                Uploaded Date
              </TableHead>
              <TableHead className="font-bold text-center w-[250px]">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-center">
                {paper?.id}
              </TableCell>
              <TableCell>{paper?.title}</TableCell>
              <TableCell className="text-center">{paper?.track}</TableCell>
              <TableCell className="text-center">
                {paper?.createdAt?.toDate()?.toLocaleDateString()}
              </TableCell>
              <TableCell className="text-center">
                {true ? (
                  <Label className="font-bold text-xs">
                    Waiting for Approval
                  </Label>
                ) : (
                  <Button className="font-bold text-xs" variant={"default"}>
                    Pay Now
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            You have not submitted any paper yet. Upload your paper now!
          </p>
          <AddPaperDialog />
        </div>
      )}
    </div>
  );
};

export default TableData;
