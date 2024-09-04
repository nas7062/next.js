import { useRouter } from "next/router";
export default function Page()
{
    const router = useRouter();
    const {q}  =router.query;
    console.log(q);
    return (
        <div>search{q}</div>
    );
}