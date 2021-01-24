import React, { useState, useEffect } from "react";
import Link from "next/link";
import App from "@components/App";
import { withTranslation } from "@hocs/witI18n";

const Posts = ({ posts: serverPosts, t }) => {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("http://localhost:3001/posts");
        const newPosts = await response.json();

        setPosts(newPosts);
      } catch (error) {
        console.error(error);
      }
    }

    if (!serverPosts) {
      load().then();
    }
  }, []);

  if (!posts) {
    return (
      <App>
        <h1>Posts Page</h1>
        <p>{t('loadPage')}</p>
      </App>
    );
  }

  return (
    <App>
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </App>
  );
}

Posts.getInitialProps = async ({ req }) => {
  const defaultProps = { namespacesRequired: ['index'] };

  if (!req) {
    return { posts: null, ...defaultProps };
  }

  const response = await fetch("http://localhost:3001/posts");
  const posts = await response.json();

  return { posts, ...defaultProps };
};

export default withTranslation('index')(Posts);