import { useEffect, useState } from "react";
import Photo from "./Photo";
import "./Photo.css"

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div>
      <h4>Photos : {photos.length}</h4>
      <div className="card-grid">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo}></Photo>
        ))}
      </div>
    </div>
  );
};

export default Photos;
