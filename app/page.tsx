import React from "react";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import Posts from "./components/Posts";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <main className="max-w-7xl min-h-screen mx-auto px-4 py-16">
      <h1 className="py-10 text-5xl text-center">Example blog</h1>
      <Posts posts={posts} />
    </main>
  );
}
