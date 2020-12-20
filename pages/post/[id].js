// @flow
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Index from "@components/App";
import { NextPageContext } from "next";

type Props = {
  post: Array<{ id: number, title: string, descriptions: string }> | {},
};

export default function Post<Props>({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:3001/posts/${router.query.id}`
      );
      const data = await response.json();

      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <Index>
        <p>Loading...</p>
      </Index>
    );
  }

  return (
    <Index>
      <h1>ID: {post.id}</h1>
      <hr />
      <h3>{post.title}</h3>
      <span>{post.body}</span>
      <hr />
      <br />
      <Link href="/posts">
        <a>Back to all posts</a>
      </Link>
    </Index>
  );
}

Post.getInitialProps = async ({ query: { id }, req }: NextPageContext) => {
  if (!req) {
    return {};
  }

  const response = await fetch(`http://localhost:3001/posts/${id}`);
  const post = await response.json();

  return { post };
};

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import useFallback from "@hooks/useFallback";
// import Index from "@components/Index";
//
// export default function Post({ post: serverPost }) {
//     const [post, setPost] = useState(serverPost);
//     const isFallback = useFallback();
//
//     useEffect(() => {
//         async function load() {
//             const response = await fetch(`http://localhost:3001/posts/${router.query.id}`);
//             const data = await response.json();
//
//             setPost(data);
//         }
//
//         if (!serverPost) {
//             console.log('!serverPost');
//             load();
//         }
//     }, []);
//
//     if (!post || isFallback) {
//         return <Index><p>Loading...</p></Index>;
//     }
//
//     return (
//         <Index>
//             <h1>ID: {post.id}</h1>
//             <hr/>
//             <h3>{post.title}</h3>
//             <span>{post.body}</span>
//             <hr/>
//             <br/>
//             <Link href="/posts"><a>Back to all posts</a></Link>
//         </Index>
//     )
// }
//
// export async function getStaticPaths() {
//     const response = await fetch(`http://localhost:3001/posts`);
//     const posts = await response.json();
//     const paths = posts.map(post => ({
//         params: { id: String(post.id) }
//     }));
//
//     return { paths, fallback: false }
// }
//
// export async function getStaticProps({ params: { id } }) {
//     const response = await fetch(`http://localhost:3001/posts/${id}`);
//     const post = await response.json();
//
//     return { props: { post } };
// }
