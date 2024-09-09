import fetchIdBooks from "@/lib/fetch-id-book";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const books = await fetchIdBooks(Number(id));
  if(!books)
  {
    return{
      notFound: true,
    }
  }
  return {
    props: {
      books, 
    },
  };
};
export default function Page({
  books,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if(router.isFallback)
    return "로딩중 입니다."
  if (!books) 
    return "다시 시도해주세요";
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    books;0

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4">
      <img src={coverImgUrl} alt={title} className="w-[60vh]  h-[60vh]  " />
      <div className="mt-4 text-xl font-bold">{title}</div>
      <div className="text-lg">{subTitle}</div>
      <div className="text-sm mt-2 ">{description}</div>
      <div className="text-sm mt-2">
        {author} | {publisher}
      </div>
    </div>
  );
}
