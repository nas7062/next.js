import{ BookItemProps } from "@/types";
export default async function fetchBooks(q?:string):Promise<BookItemProps[]>
{
    let url =`http:localhost:12345/book`
    if(q)
    {
        url +=`/search?q=${q}`;
    }
    try {
        const response = await fetch(url);
        if(!response.ok)
            {
                throw new Error();
            }  

        return  await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

