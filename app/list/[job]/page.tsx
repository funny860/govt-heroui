import JobDescription from "../job-description"
import { getAllJobs } from "@/app/lib/data";

export async function generateStaticParams() {
    const jobs = await getAllJobs();
    return jobs.map((job:any) => ({ job: job.id }));
  }
  
  export default async function Page({
    params
  }: {
    params: Promise<{ job: string }>
  }) {
    const jobId  = (await params).job;
    const jobs = await getAllJobs();
    const job = jobs.find((j:any) => j.id === jobId);
  
    if (!job) return <div>Job not found</div>;
  
    return <JobDescription job={job} />;
  }