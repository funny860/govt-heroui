"use client";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { useEffect, useState } from "react";

export default function JobsList() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbzF_YWk7tvC1j04sUkykSKhy0wCHc54Gh7m1HK5qvfVTqLsN1sxb0RRZNxfvM3BRoO-/exec");
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
            <Link isExternal showAnchorIcon href={item.applyLink}>
                Apply Here
            </Link>
          </TableCell>
        </TableRow>})}
      </TableBody>
    </Table>
    </div>
  );
}