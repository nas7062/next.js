import { BookItemProps } from "@/types";

export default async function fetchIdBooks(id:number):Promise<BookItemProps | null> {
        const url =`http://localhost:12345/book/${id}`;
        try {
            const response = await fetch(url);
            return await response.json();
            
        } catch (error) {
            console.error(error);
            return null;
        }
}