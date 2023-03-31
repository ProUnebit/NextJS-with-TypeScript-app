import Head from "next/head";
import Link from "next/link";
import Heading from "@/components/Headiing";

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts: data },
  }
};

const Posts = ({ posts }) => { 
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:" />
      <ul>
        {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title[0].toUpperCase() + title.slice(1)}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
