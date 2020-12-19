import { useState, useEffect } from 'react';
import Link from 'next/link';
import MainLayout from "../client/components/MainLayout";

export default function Posts({ posts: serverPosts }) {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch('http://localhost:3001/posts');
                const newPosts = await response.json();

                setPosts(newPosts);
            } catch (error) {
                console.error(error);
            }
        }

        if (!serverPosts) {
            load();
        }
    }, []);

    if (!posts) {
        return (
            <MainLayout>
                <h1>Posts Page</h1>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <h1>Posts Page</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href="/post/[id]" as={`/post/${post.id}`}><a>{post.title}</a></Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
}

Posts.getInitialProps = async ({ req }) => {
    if (!req) {
        return {};
    }

    const response = await fetch('http://localhost:3001/posts');
    const posts = await response.json();

    return { posts }
}