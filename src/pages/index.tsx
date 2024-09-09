import SearchLayout from "@/components/Search_Layout";
import { ReactNode } from "react";
import BookItem from "@/components/BookItem";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchBestBooks from "@/lib/fetch-randombooks";
export const  getStaticProps = async () =>{
  console.log("인덱스 페이지");
    const [AllBooks,BestBooks] =await Promise.all([
      fetchBooks(),
      fetchBestBooks(),
    ])

  return {
    props:{
      AllBooks,
      BestBooks,
    },
    revalidate :3,
  }
}
export default function Home({AllBooks,BestBooks}:InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (
    <div className="flex flex-col gap-12 mt-20 ">
      <section>
        <h3 className="mb-4 ml-4">지금 추천하는 도서</h3>
        {BestBooks.map((item)=><BookItem key={item.id} {...item} />)}
      </section>
      <section>
      <h3 className="mb-4 ml-4">등록되 모든 도서</h3>
      {AllBooks.map((item)=><BookItem key={item.id} {...item} />)}
      </section>
    </div>
  );
}

Home.getLayout = (page:ReactNode)=>{
  return <SearchLayout>{page}</SearchLayout>
}