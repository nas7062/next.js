import { ReactNode } from "react";
import Link from "next/link";
export default function GlobalLayout({children}:{children:ReactNode}){

    return (
        <div className="\  bg-gray-200 min-h-[120vh] w-3/5 mx-auto my-0 text-lg shadow-md px-15 py-0" >
          <header className="text-4xl">
            <Link href={"/"}>10012</Link>
          </header>
          <main className="pt-10 " >
            {children}
            </main>
          <footer className="pt-12">
            제작자:10012 
          </footer>
        </div>
        ); 
}