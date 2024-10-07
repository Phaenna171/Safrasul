import Link from "next/link";
import { useEffect, useState } from "react";

export default function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
  }, []);

  async function getPosts() {
    const { data } = await (await fetch(`https://graph.instagram.com/me/media?access_token=${process.env.NEXT_PUBLIC_INSTA_TOKEN}&fields=media_url,permalink,media_type`))
      .json()
    setPosts(data.filter(el => el.media_type == 'IMAGE'))
  }
  
  return (
    <>
      <div className="px-10 pt-0 pb-12 md:px-40 md:py-24">
        <h1 className='font-openSans font-bold text-xl md:text-4xl text-[#354D4D] md:pb-4'>Últimas Postagens</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-1 justify-center items-center">
            <Link target="_blank" href={posts[0]?.permalink || 'https://instagram.com/safrasulsementes'} className="flex items-center justify-center">
              <img width={223} height={223} src={posts[0]?.media_url || "imgs/post.svg"} className="" />
            </Link>
            <Link target="_blank" href={posts[1]?.permalink || 'https://instagram.com/safrasulsementes'} className="flex items-center justify-center">
              <img width={223} height={223} src={posts[1]?.media_url || "imgs/post.svg"} className="" />
            </Link>
            <Link target="_blank" href={posts[2]?.permalink || 'https://instagram.com/safrasulsementes'} className="flex items-center justify-center">
              <img width={223} height={223} src={posts[2]?.media_url || "imgs/post.svg"} className="" />
            </Link>
            <Link target="_blank" href={posts[3]?.permalink || 'https://instagram.com/safrasulsementes'} className="flex items-center justify-center">
              <img width={223} height={223} src={posts[3]?.media_url || "imgs/post.svg"} className="" />
            </Link>
            {/* As duas divs abaixo só serão exibidas em telas médias ou maiores */}
            <Link target="_blank" href={posts[4]?.permalink || 'https://instagram.com/safrasulsementes'} className="hidden md:flex items-center justify-center">
              <img width={223} height={223} src={posts[4]?.media_url || "imgs/post.svg"} className="" />
            </Link>
            <Link target="_blank" href={posts[5]?.permalink || 'https://instagram.com/safrasulsementes'} className="hidden md:flex items-center justify-center">
              <img width={223} height={223} src={posts[5]?.media_url || "imgs/post.svg"} className="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
