import React from 'react'
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
import { Button } from '../ui/button';

const TableData = () => {
  return (
    <div className=''>
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
            <TableHead className="font-bold text-center w-[150px]">
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
            <TableCell className="font-medium text-center">INV001</TableCell>
            <TableCell>
              Enhancing students’ learning process through interactive digital
              media: New opportunities for collaborative learning
            </TableCell>
            <TableCell className="text-center">Credit Card</TableCell>
            <TableCell className="text-center">23 Sep 2023</TableCell>
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
    </div>
  );
}

export default TableData