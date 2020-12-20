import Link from "next/link";

export default function App({ children }) {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          top: 0;
          left: 0;
          right: 0;
          background: darkblue;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        nav a {
          color: white;
          font-size: 20px;
          text-transform: uppercase;
          text-decoration: none;
        }
        main {
          margin-top: 62px;
        }
      `}</style>
    </>
  );
}
