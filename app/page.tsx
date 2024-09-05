import { client } from "@/sanity/lib/client";
import groq from 'groq';
import Image from "next/image";

const getPosts = async (lastId: string = '') => {
  const query = groq`*[_type == 'blog' && _id > $lastId] | order(_createdAt desc) [0...2] {
    _id,
      title,
      smallDescription,
      _createdAt,
      "currentSlug": slug.current,
      titleImage
  }`
  return client.fetch(query,{ lastId })
}
export default async function Home() {
  
  const posts =  await getPosts();
  console.log(posts);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
