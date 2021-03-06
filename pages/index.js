import React from "react";
import Link from "next/link";
import App from "@components/App";
import Head from "next/head";

export default function Index() {
  return (
    <App>
      <Head>
        <title>Title</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>Index Page</h1>
    </App>
  );
}
