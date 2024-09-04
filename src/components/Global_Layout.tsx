import { ReactNode } from "react";
import Link from "next/link";
export default function Global_Layout({children}:{children:ReactNode}){

    return (
        <div>
          <header>
            <Link href={"/"}>10012</Link>
          </header>
          <main>
            {children}
            </main>
          <footer>제작자:10012 </footer>
        </div>
        ); 
}