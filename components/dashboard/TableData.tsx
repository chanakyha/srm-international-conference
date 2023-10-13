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
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/backend/firebase";
import AddPaperDialog from "./AddPaperDialog";

const TableData = ({ user, paper }: any) => {
    // console.log(user);

    console.log(paper);
    const handlePayment = async (id: any) => {
        // const docRef = doc(db, "papers", id);
        // const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //     const docRef = doc(db, "papers", id);
        //     await updateDoc(docRef, {
        //         paid: true,
        //     });
        //     alert("Payment Successful");
        // } else {
        //     alert("Paper does not exist");
        // }
        alert("Payment Error")
    };

    return (
        <div suppressHydrationWarning className="">
            {paper ? (
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold text-left w-[200px]">
                                Submission ID
                            </TableHead>
                            <TableHead className="font-bold text-left w-[750px]">
                                Paper Title
                            </TableHead>
                            <TableHead className="font-bold text-left w-[350px]">
                                Track
                            </TableHead>
                            <TableHead className="font-bold text-center w-[200px]">
                                Uploaded Date
                            </TableHead>
                            <TableHead className="font-bold text-center w-[250px]">
                                Status
                            </TableHead>
                            {paper?.status === "accepted" && (
                                <TableHead className="font-bold text-center w-[250px]">
                                    Payment Status
                                </TableHead>
                            )}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium text-left">
                                {paper?.id}
                            </TableCell>
                            <TableCell>{paper?.title}</TableCell>
                            <TableCell className="text-left">
                                {paper?.track}
                            </TableCell>
                            <TableCell className="text-center">
                                {paper?.createdAt
                                    ?.toDate()
                                    ?.toLocaleDateString()}
                            </TableCell>
                            <TableCell className="text-center">
                                {paper?.status === "review" ? (
                                    <Label className="text-sm text-yellow-500">
                                        Under Review
                                    </Label>
                                ) : paper?.status === "accepted" ? (
                                    <Label className="text-sm text-green-500">
                                        Accepted
                                    </Label>
                                ) : (
                                    <Label className="text-sm text-red-500">
                                        {paper?.status}
                                    </Label>
                                )}
                            </TableCell>
                            {paper?.status === "accepted" && (
                                <TableCell className="text-center">
                                    <Button
                                        className="text-sm"
                                        variant={"default"}
                                        onClick={()=>handlePayment(paper?.id)}
                                    >
                                        Pay Now
                                    </Button>
                                </TableCell>
                            )}
                        </TableRow>
                    </TableBody>
                </Table>
            ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        You have not submitted any paper yet. Upload your paper
                        now!
                    </p>
                    <AddPaperDialog />
                </div>
            )}
        </div>
    );
};

export default TableData;
