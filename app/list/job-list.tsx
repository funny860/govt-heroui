"use client";
import { SHEET_URL } from "@/config/constants";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { useEffect, useState } from "react";

export default function JobsList() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await fetch(SHEET_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        }
        fetchJobs();
    }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Table 
      aria-label="Example static collection table" 
      selectionMode="single"
      color="primary"
      >
      <TableHeader>
        <TableColumn>Exam</TableColumn>
        <TableColumn>Department</TableColumn>
        <TableColumn>Deadline</TableColumn>
        <TableColumn>Link</TableColumn>
      </TableHeader>
      <TableBody>
        {jobs.map((item:any)=>{return <TableRow key={item.id}>
          <TableCell>{item.title}</TableCell>
          <TableCell>{item.department}</TableCell>
          <TableCell>{item.lastDate}</TableCell>
          <TableCell>
            <Button
              color="primary"
              size="sm"
              onClick={() => window.location.href = `/list/${item.id}`}
            >
              Apply
            </Button>
            {/* <Link  showAnchorIcon href={item.id}>
                Apply Here
            </Link> */}
          </TableCell>
        </TableRow>})}
      </TableBody>
    </Table>
    </div>
  );
}