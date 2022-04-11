import fs from "fs";
import path from "path";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>My Blog</title>
      </Head>

      <h2>Hello</h2>
    </div>
  );
}

export async function getStaticProps() {
  // post directory에서 파일 가져오기
  const files = fs.readdirSync(path.join("posts"));

  // post directory에서 slug,frontmatter 가져오기
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    return {
      slug,
    };
  });

  console.log(posts);

  return {
    props: {
      posts: "The Posts",
    },
  };
}
