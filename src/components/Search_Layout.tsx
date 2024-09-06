import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

export default function SearchLayout({children}:{children:ReactNode})
{   
    const router = useRouter();
    const [search,setsearch] =useState("");
    const q =router.query.q as string;

    useEffect(()=>{
        setsearch(q || "");
    } ,[q])
    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setsearch(e.target.value);
    }
    const onSubmit= () =>{
        if(!search || q ===search)
            return;
        router.push(`/search?q=${search}`)
    }
    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key ==="Enter")
        {
            onSubmit();
        }
        
    }
    return(
        <>
        <div className="flex">
            <input className="flex-1 rounded-lg h-10" type="text" value={search} onChange={onChangeSearch} placeholder="검색해주세요.." onKeyDown={onKeyDown} />
            <button className="w-20 text-2xl text-emerald-700 ml-2" onClick={onSubmit}>검색</button>
        </div>
        <div>
            {children}
        </div>
        </>
    );
}