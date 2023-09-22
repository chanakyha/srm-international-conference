import { Check, X, ArrowUpDown, MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Timestamp } from "firebase/firestore";

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
    assignReveiwer: string;
};

export const columns: ColumnDef<PaperProps>[] = [
    {
        accessorKey: "id",
        header: () => <h1 className="text-center">Submission ID</h1>,
    },
    {
        accessorKey: "title",
        header: () => <h1 className="text-center">Paper Title</h1>,
    },
    {
        accessorKey: "track",
        header: () => <h1 className="text-center">Track</h1>,
    },
    {
        accessorKey: "createdAt",
        header: () => <h1 className="text-center">Updated At</h1>,
        cell: ({ row }) => {
            return (
                <div className="text-gray-500">
                    {(row.getValue("createdAt") as Timestamp).toDate().toLocaleDateString()}
                </div>
            );
        },
    },
    {
        accessorKey: "assignReveiwer",
        header: () => <h1 className="text-center">Assign Reveiwer</h1>,
        cell: ({ row }) => {
            return (
                <Button size={"sm"} variant={"outline"} className="">
                    Assign
                </Button>
            );
        },
    },
];
