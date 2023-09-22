import { Check, X, ArrowUpDown, MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Timestamp } from "firebase/firestore";

interface ReviewerProps {
    reviewerEmail: string;
    reviewerName: string;
    reviewerOrg: string;
    picture: string;
    assignedPapers: string[];
}

export const columns: ColumnDef<ReviewerProps>[] = [
    {
        accessorKey: "reviewerEmail",
        header: () => <h1 className="text-left">Email</h1>,
    },
    {
        accessorKey: "reviewerName",
        header: () => <h1 className="text-left">Name</h1>,
    },
    {
        accessorKey: "reviewerOrg",
        header: () => <h1 className="text-left">Organization</h1>,
    },
    {
        accessorKey: "assignedPapers",
        header: () => <h1 className="text-left">Assigned Papers</h1>,
    },
];
