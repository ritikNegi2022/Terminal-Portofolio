import { getBio } from "@/pages/api";


export const about = async (args) => {
    const bio = await getBio();

    return bio
}