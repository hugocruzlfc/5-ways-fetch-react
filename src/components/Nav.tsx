import React from "react";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            className="link__content"
            to="/swr"
          >
            SWR
          </Link>
        </li>
        <li>
          <Link
            className="link__content"
            to="/fetch"
          >
            Fetch
          </Link>
        </li>
        <li>
          <Link
            className="link__content"
            to="/react-query"
          >
            React Query
          </Link>
        </li>
        <li>
          <Link
            className="link__content"
            to="/axios"
          >
            Axios
          </Link>
        </li>
        <li>
          <Link
            className="link__content"
            to="/react-fetch-hook"
          >
            React Fetch Hook
          </Link>
        </li>
      </ul>
    </nav>
  );
};
