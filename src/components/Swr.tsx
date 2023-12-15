import React from "react";
import useSWR, { SWRConfiguration } from "swr";

const fetcher: SWRConfiguration["fetcher"] = async (url, ...args) => {
  const response = await fetch(url, ...args);
  const data = await response.json();
  return data;
};

export const Swr: React.FC = () => {
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR<any[]>("https://restcountries.com/v2/all", fetcher);

  // Handles error and loading state
  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="loading">Loading...</div>;

  return (
    <div className="content">
      {countries &&
        countries.map((country: any, index: number) => (
          <img
            key={index}
            src={country.flags.png}
            alt="flag"
            width={100}
          />
        ))}
    </div>
  );
};
