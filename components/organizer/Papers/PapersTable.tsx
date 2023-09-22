import React, { useMemo, useEffect, useState } from "react";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    SortingState,
    getSortedRowModel,
    ColumnFiltersState,
    getFilteredRowModel,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { columns } from "./columns";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/backend/firebase";

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

const PapersTable: React.FC = () => {
    const [papers, setPapers] = useState<PaperProps[]>([]);
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [filterValue, setFilterValue] = React.useState("id");

    const table = useReactTable({
        data: papers,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
            sorting,
        },
    });

    useEffect(() => {
        table.setPageSize(10);
    }, [table]);

    useEffect(() => {
        const colRef = collection(db, "papers");
        const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
            const papers: any = [];
            querySnapshot.forEach((doc) => {
                papers.push({ ...doc.data(), id: doc.id });
            });
            setPapers(papers);
        });
        return () => unsubscribe();
    }, []);

    console.log(table.getColumn(filterValue));

    return (
        <section className="col-span-9 overflow-y-scroll">
            <div className="flex items-center py-4 px-4">
                <Select
                    onValueChange={(value) => setFilterValue(value)}
                    defaultValue="id"
                >
                    <SelectTrigger className="w-[180px] mr-4">
                        <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="id">Submission ID</SelectItem>
                        <SelectItem value="track">Track</SelectItem>
                    </SelectContent>
                </Select>
                <Input
                    placeholder="Search..."
                    value={
                        (table
                            .getColumn(filterValue)
                            ?.getFilterValue() as string) ?? ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn(filterValue)
                            ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <div className="flex items-center justify-end space-x-2 ml-auto">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
            <Table>
                <TableHeader className="">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} className="">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        className="text-xs text-center"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </section>
    );
};

export default PapersTable;
