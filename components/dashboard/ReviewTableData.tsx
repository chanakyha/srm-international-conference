import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/backend/firebase";
import Link from "next/link";
import AddCommentsDialog from "./AddCommentsDialog";

interface User {
  email: string;
  registered: boolean;
  name: string;
  mobile: string;
  category: string;
  organization: string;
  picture: string;
  paperUpload: boolean;
  paperId: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface DashboardProps {
  user: User | null;
}

interface PaperProps {
  abstract: string;
  createdAt: any;
  id: string;
  keywords: string;
  paid: boolean;
  status: string;
  title: string;
  track: string;
  fileUrl: string;
  assignedReviewerName: string;
  assignedReviewerEmail: string;
}
[];

const ReviewTableData = ({user}:DashboardProps) => {
  const [papers, setPapers] = useState<PaperProps[]>([]);

  console.log(papers);


  useEffect(() => {
    const colRef = query(
      collection(db, "papers"),
      where("assignedReviewerEmail", "==", user?.reviewerEmail)
    );
    const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
      const papers: any = [];
      querySnapshot.forEach((doc) => {
        papers.push({ ...doc.data(), id: doc.id });
      });
      setPapers(papers);
    });
    return () => unsubscribe();
  }, []);

  console.log(papers);

  return (
    <div suppressHydrationWarning className="">
      <div className="flex justify-between my-4">
        <h1 className="text-lg md:text-2xl font-semibold text-gray-900">
          Paper Details
        </h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-center w-[150px]">
              Submission ID
            </TableHead>
            <TableHead className="font-bold text-left w-[800px]">
              Paper Title
            </TableHead>
            <TableHead className="font-bold text-center w-[150px]">
              Track
            </TableHead>
            <TableHead className="font-bold text-center w-[200px]">
              Uploaded Date
            </TableHead>
            <TableHead className="font-bold text-center w-[250px]">
              Comments
            </TableHead>
            <TableHead className="font-bold text-center w-[250px]">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {papers.map((paper) => (
            <TableRow key={paper.id}>
              <TableCell width={200} className="font-medium text-center">
                {paper.id}
              </TableCell>
              <TableCell>
                <Link className="hover:underline"  href={paper.fileUrl} target={"_blank"}>{paper.title}</Link>
              </TableCell>
              <TableCell width={300} className="text-center">
                {paper.track}
              </TableCell>
              <TableCell className="text-center">
                {paper.createdAt.toDate().toLocaleDateString()}
              </TableCell>
              <TableCell className="text-center">
                <AddCommentsDialog id={paper.id}/>
              </TableCell>
              <TableCell className="text-center">
                {paper.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReviewTableData;
