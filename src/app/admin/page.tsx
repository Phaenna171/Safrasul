import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <main className="bg-white h-screen w-full flex flex-col gap-8 justify-center">
            <Image className="flex self-center" unoptimized width={300} height={300} src="/imgs/logo.png" alt="Logo Safrasul" />
            <div className="flex gap-10 justify-center flex-wrap w-full">
                <Link href="/admin/produtos" className="w-[421px] h-[533px] hover:scale-105 transition-all">
                    <img className=" rounded-tl-2xl rounded-tr-2xl" src="https://via.placeholder.com/421x467" />
                    <div className="bg-[#056735] rounded-b-md py-2 text-center text-white text-base font-extrabold">PRODUTOS</div>
                </Link>
                <Link href="/admin/carrosel" className="w-[421px] h-[533px] hover:scale-105 transition-all">
                    <img className=" rounded-tl-2xl rounded-tr-2xl" src="https://via.placeholder.com/421x467" />
                    <div className="bg-[#056735] rounded-b-md py-2 text-center text-white text-base font-extrabold">CARROSSEL</div>
                </Link>
                <Link href="/admin/blog" className="w-[421px] h-[533px] hover:scale-105 transition-all">
                    <img className=" rounded-tl-2xl rounded-tr-2xl" src="https://via.placeholder.com/421x467" />
                    <div className="bg-[#056735] rounded-b-md py-2 text-center text-white text-base font-extrabold">BLOG</div>
                </Link>
            </div>
        </main>
    )
}