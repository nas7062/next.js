import { useRouter } from "next/router"
export default function Page()
{   
    const router = useRouter();
    const {id} = router.query;
    return <div>book {id}</div>
};