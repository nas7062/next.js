import { BookItemProps } from "@/types";
import Link from "next/link";
export default function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookItemProps) {
  return (
    <Link href={`/book/${id}`} >
        <div className="flex gap-3 px-4 py-3 border-b-2">
      <img src={coverImgUrl} alt={title}  className="size-52"/>
      <div>
        <div className="text-bold">{title}</div>
        <div className="break-keep">{subTitle}</div>
        <br />
        <div className="text-gray-500">
          {author} | {publisher}
        </div>
      </div>
      </div>
    </Link>
  );
}
