import BookItem from "@/components/BookItem";
import SearchLayout from "@/components/Search_Layout";
import fetchBooks from "@/lib/fetch-books";
import { BookItemProps } from "@/types";
import {  GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

// export const getStaticProps = async (context:GetStaticPropsContext) =>{

//     const q = context.query.q;
//     const books = await fetchBooks(q as string);
//     return {
//         props :{
//             books,
//         }
//     }
// }

export default function Page()
{   
    const [books,setbooks] = useState<BookItemProps[]>([]);
    const router = useRouter();
    const q  =router.query.q;

    const fetchSearchResult = async () =>
    {
        const data = await fetchBooks(q as string);
        setbooks(data);
    }
    useEffect(()=>{
            if(q)
            {
                fetchSearchResult(); 
            }
    },[q])
    return (
        <section>
      {books.map((item)=><BookItem key={item.id} {...item} />)}
      </section>
    );
}   
Page.getLayout=(page:ReactNode)=>{
    return <SearchLayout>{page}</SearchLayout>
}