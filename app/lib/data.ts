import { SHEET_URL } from "@/config/constants";

export async function getAllJobs() {
    const res = await fetch(SHEET_URL);
    return res.json();
  }