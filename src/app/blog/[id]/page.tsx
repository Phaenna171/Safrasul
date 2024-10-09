'use client'
import HeaderBlog from "@/app/components/blog/HeaderBlog";
import Footer from "@/app/components/Footer";
import blogService from "@/services/blog.service";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PostPage({ params }: { params: { id: string } }) {
    const footerRef = useRef(null);

    const [post, setPost] = useState(null);

    useEffect(() => {
        async function getData() {
            const { data } = await blogService.getById(params.id)
            setPost(data)
        }
        getData()
    }, [params]);

    return (
        <>
            <HeaderBlog footerRef={footerRef} />
            <div className="flex flex-col gap-6 items-center">
                <h1 className="text-center font-openSans font-bold text-5xl pt-24">{post?.title}</h1>
                <Image src={post?.image} className="object-cover" width={300} height={400} alt={post?.title} />
                <div className="mb-10" dangerouslySetInnerHTML={{__html: post?.description}}></div>
            </div>
            <Footer ref={footerRef} />
        </>
    )
}