import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddReveiwersDialog from "./AddReveiwersDialog";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/backend/firebase";
import { Button } from "../ui/button";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "../ui/input";
import { DataTable } from "./data-table";
import AssignCombo from "./AssignCombo";

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
}
[];

const PaperTableData = () => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [papers, setPapers] = useState<PaperProps[]>([]);
  const data = React.useMemo(() => papers, [papers]);
  const columns = React.useMemo<ColumnDef<PaperProps>[]>(
    () => [
      {
        id: "submissionId",
        header: "Submission ID",
        // accessorKey: (row) => row.id,
        render: flexRender,
      },
      {
        id: "paperTitle",
        header: "Paper Title",
        // accessorKey: (row) => row.title,
        render: flexRender,
      },
      {
        id: "track",
        header: "Track",
        // accessorKey: (row) => row.track,
        render: flexRender,
      },
      {
        id: "uploadedDate",
        header: "Uploaded Date",
        // accessorKey: (row) => row.createdAt.toDate().toLocaleDateString(),
        render: flexRender,
      },
      {
        id: "assignReveiwer",
        header: "Assign Reveiwer",
        // accessorKey: (row) => row.assignReveiwer,
        render: flexRender,
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  useEffect(() => {
    const colRef = query(
      collection(db, "papers"),
      where("assignedReviewerName", "==", "")
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
          Assign Reveiwers
        </h1>
        <AddReveiwersDialog />
      </div>
      {/* <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <DataTable columns={columns} data={data} /> */}
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
              Assign Reveiwer
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {papers.map((paper) => (
            <TableRow key={paper.id}>
              <TableCell width={200} className="font-medium text-center">
                {paper.id}
              </TableCell>
              <TableCell>{paper.title}</TableCell>
              <TableCell width={300} className="text-center">
                {paper.track}
              </TableCell>
              <TableCell className="text-center">
                {paper.createdAt.toDate().toLocaleDateString()}
              </TableCell>
              <TableCell className="text-center">
                {/* <Button size={"sm"} variant={"outline"} className="">
                  Assign
                </Button> */}
                <AssignCombo paper={paper}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaperTableData;
