import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/backend/firebase";

interface ReviewerProps {
  reviewerEmail: string;
  reviewerName: string;
  reviewerOrg: string;
  picture: string;
  assignedPapers: string[];
}
[];
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const ReviewerTableData = () => {
  const [reviewers, setReviewers] = useState<ReviewerProps[]>([]);
  useEffect(() => {
    const colRef = collection(db, "reviewers");
    const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
      const reviewer: any = [];
      querySnapshot.forEach((doc) => {
        reviewer.push({ ...doc.data(), id: doc.id });
      });
      setReviewers(reviewer);
    });
    return () => unsubscribe();
  }, []);

  console.log(reviewers);
  return (
    <div suppressHydrationWarning className="">
      <div className="">
        <h1 className="text-lg md:text-2xl font-semibold text-gray-900">
          Reveiwers
        </h1>
      </div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-left w-[250px]">
              Reveiwer Name
            </TableHead>
            <TableHead className="font-bold text-left w-[250px]">
              Email
            </TableHead>
            <TableHead className="font-bold text-center w-[250px]">
              Organization
            </TableHead>
            <TableHead className="font-bold text-center w-[250px]">
              Assigned Papers
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviewers.map((reviewer) => (
            <TableRow key={reviewer.reviewerEmail}>
              <TableCell className="">{reviewer.reviewerName}</TableCell>
              <TableCell>{reviewer.reviewerEmail}</TableCell>
              <TableCell className="text-center">{reviewer.reviewerOrg}</TableCell>
              <TableCell className="text-center">
                {reviewer.assignedPapers.length}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReviewerTableData;
