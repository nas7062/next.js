import SearchLayout from "@/components/Search_Layout";
import { ReactNode } from "react";
import books from "@/Data/books.json";
import BookItem from "@/components/BookItem";
export default function Home() {
  return (
    <div className="flex flex-col gap-12 mt-20 ">
      <section>
        <h3 className="mb-4 ml-4">지금 추천하는 도서</h3>
        {books.map((item)=><BookItem key={item.id} {...item} />)}
      </section>
      <section>
      <h3 className="mb-4 ml-4">등록되 모든 도서</h3>
      {books.map((item)=><BookItem key={item.id} {...item} />)}
      </section>
    </div>
  );
}

Home.getLayout = (page:ReactNode)=>{
  return <SearchLayout>{page}</SearchLayout>
}