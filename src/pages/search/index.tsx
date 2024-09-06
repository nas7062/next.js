import SearchLayout from "@/components/Search_Layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import books from "@/Data/books.json";
import BookItem from "@/components/BookItem";
export default function Page()
{
    const router = useRouter();
    const {q}  =router.query;
    return (
        <div >
            {books.map((book)=><BookItem key={book.id} {...book}/>)}
        </div>
    );
}   
Page.getLayout=(page:ReactNode)=>{
    return <SearchLayout>{page}</SearchLayout>
}