import React from "react";
import useFetch from "react-fetch-hook";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const ReactFetchHook: React.FC = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

  // Show a loading message while data is fetching
  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }

  // Handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <>
      <h1 className="title">Post of users</h1>
      <div className="content">
        {posts?.map((post: Post) => (
          <div
            key={post.id}
            className="card"
          >
            <h2 className="users">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};
