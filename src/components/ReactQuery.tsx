import React from "react";
import { useQuery } from "@tanstack/react-query";

interface Comment {
  id: number;
  email: string;
}

export const ReactQuery: React.FC = () => {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=10").then(
        (res) => res.json()
      ),
    queryKey: ["comments"],
  });

  // Show a loading message while data is fetching
  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }

  // to handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <div className="query__content">
      <h1 className="title">Email address of users</h1>
      {comments.map((comment: Comment) => (
        <h2
          key={comment.id}
          className="users"
        >
          {comment.id}.{comment.email}
        </h2>
      ))}
    </div>
  );
};
