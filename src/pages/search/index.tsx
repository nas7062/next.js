import BookItem from "@/components/BookItem";
import SearchLayout from "@/components/Search_Layout";
import fetchBooks from "@/lib/fetch-books";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export const getServerSideProps = async (context:GetServerSidePropsContext) =>{

    const q = context.query.q;
    const books = await fetchBooks(q as string);
    return {
        props :{
            books,
        }
    }
}

export default function Page({books}:InferGetServerSidePropsType<typeof getServerSideProps>)
{
    return (
        <section>
      {books.map((item)=><BookItem key={item.id} {...item} />)}
      </section>
    );
}   
Page.getLayout=(page:ReactNode)=>{
    return <SearchLayout>{page}</SearchLayout>
}