export default function JobDescription({ job }: { job: any}) {
  console.log("Job Description", job);
  
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className="text-3xl font-bold">{job.title}</span>
        <div className="mt-4 text-lg">
          Beautiful, fast and modern React UI library.
        </div>
      </div>
    </section>
  );
}