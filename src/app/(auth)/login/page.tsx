'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import authService from "../../../services/auth.service";
import { useRouter } from "next/navigation";

export default function Page() {

    const router = useRouter()
    
    async function handleSubmit(e: any) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const result = await authService.signin({ email, password })
        if (result.error) alert(result.message)
        else router.push('/admin')
    }


    return (
        <main className="flex justify-center items-center h-full absolute z-10 w-full">
            <div className="h-[600px] px-[30px] py-12 rounded-2xl shadow gap-[27px] inline-flex bg-white">
                <div className="flex-col justify-center items-center gap-10 inline-flex">
                    <div className="justify-center items-center gap-[10.59px] inline-flex">
                        <Image unoptimized width={260} height={300} src="/imgs/logo.png" alt="Logo safrasul sementes" />
                    </div>
                    <div className="flex-col justify-start items-start gap-10 flex">
                        <div className="w-[400px] text-center text-[#ea722d] text-3xl font-bold leading-[38px]">Autenticação do Usuário</div>
                        <form onSubmit={handleSubmit} className="flex-col justify-start items-start gap-5 flex">
                            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                                <div className="text-[#6f6f6f] text-base font-normal leading-normal">Email:</div>
                                <input name="email" required type="email" className="self-stretch grow shrink basis-0 pl-5 pr-4 py-3 bg-white rounded-2xl border border-[#6f6f6f] justify-start items-center gap-2.5 inline-flex" />
                            </div>
                            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                                <div className="text-[#6f6f6f] text-base font-normal leading-normal">Senha:</div>
                                <input name="password" required type="password" className="self-stretch grow shrink basis-0 pl-5 pr-4 py-3 bg-white rounded-2xl border border-[#6f6f6f] justify-start items-center gap-2.5 inline-flex" />
                            </div>
                            <button className="w-[400px] px-7 py-[13px] bg-[#ea722d] rounded-2xl justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-white text-lg font-medium leading-relaxed">Entrar</div>
                            </button>
                        </form>
                    </div>
                    <div className="justify-start items-start gap-[23px] inline-flex">
                        <Link href="/esqueci-minha-senha" className="text-[#6f6f6f] text-base font-normal leading-normal">Esqueci minha senha</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}