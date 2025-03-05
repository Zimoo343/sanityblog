"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  console.log(post.audioURL);
  return (
    <div className=" min-h-screen py-12">
      <article className="max-w-4xl mx-auto  rounded-xl overflow-hidden">
        {/* Header Section */}
        <header className="bg-gradient-to-r   p-8">
          <h1 className="text-4xl font-bold mb-4 text-center">{post.title}</h1>
          {post.description && (
            <p className="text-xl text-center opacity-90">{post.description}</p>
          )}
        </header>

        {/* Main Content Area */}
        <div className="p-8 space-y-6">
          {/* Featured Image */}
          {post?.mainImage && (
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src={builder
                  .image(post.mainImage)
                  .width(1200)
                  .height(600)
                  .url()}
                alt={post?.mainImage?.alt || "Post featured image"}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Body Content */}
          {post?.body && (
            <div className="prose prose-lg prose-blue max-w-none">
              <PortableText value={post.body} />
            </div>
          )}

          {/* Audio Player */}
          {post?.audioURL && (
            <div className="mt-8 p-4 rounded-lg flex justify-center">
              <ReactAudioPlayer
                src={post.audioURL}
                controls
                className="w-full max-w-md"
              />
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default Post;
