import { client, urlFor, groq} from "@/sanity/lib/client";
import { blogCard } from "@/sanity/lib/interface";
import Image from "next/image";
//import groq from "next-sanity";

async function getData() {
  const query = groq`*[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    altText,
    "currentSlug": slug.current,
    "image": titleImage.asset->url,
    image,
}`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: blogCard[] = await getData();
  console.log(data);

  return (
    <main>
      {data.map((post, id) => (
        <div key={id}>
          {post.image ? (
            <Image
              src={urlFor(post.image).url()}
              alt={post.altText}
              width={400}
              height={250}
            />
          ) : (
            <p>No image available</p>
          )}
          <p>{post.title}</p>
          <p>{post.smallDescription}</p>
        </div>
      ))}
    </main>
  );
}
