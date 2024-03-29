import Head from "next/head";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";

const Post = () => {
  const data = useContext(PostContext);
  console.log(data);
  return (
    <>
      <Head>
        <title>{"Loading..."}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto my-12 min-h-screen max-w-3xl">
        <div className="comments-title">Comments</div>
        <section>
          {/* {data.comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <CommentList rootComments={comment} />
                </div>
              ))} */}
        </section>
      </main>
    </>
  );
};

export default Post;
