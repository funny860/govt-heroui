import JobDescription from "../job-description"

export async function generateStaticParams() {
    return [{ job: '1' },{job : '2'}]
}
export default function Page({
    params
  }: {
    params: Promise<{ job: string }>
  }) {
    return (
        <>
            <JobDescription />
        </>
    )
}