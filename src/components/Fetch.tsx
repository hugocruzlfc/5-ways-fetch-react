import React, { useState, useEffect } from "react";

interface Photo {
  id: number;
  url: string;
  title: string;
}

interface Photo {
  id: number;
  url: string;
  title: string;
}

export const Fetch: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPhotos(data);
      });
  }, []);

  return (
    <div className="content">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.url}
          alt={photo.title}
          width={100}
        />
      ))}
    </div>
  );
};
