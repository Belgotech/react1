import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [error, setErrors] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
        console.log(response)
        setPhotos(response.data)
      } catch (error) {
        setErrors(error.message)
      }
      return

    };

    fetchPhotos();
  }, []);

  const getCurrentDay = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    return currentDay;
  };

  const filterPhotos = () => {
    const currentDay = getCurrentDay();

    return photos.filter(photo => {
      const albumId = photo.albumId;
      const id = photo.id;

      if (
        (currentDay === 0 || currentDay === 2 || currentDay === 4 || currentDay === 6) &&
        albumId % 2 === 1
      ) {
        // Sunday, Tuesday, Thursday, Saturday - Display odd ID albums
        return true;
      } else if (
        (currentDay === 1 || currentDay === 3 || currentDay === 5) &&
        (albumId + id) % 2 === 0
      ) {
        // Monday, Wednesday, Friday - Display odd ID albums with pink border
        return true;
      }
      return false;
    });
  };

  return (
    <div>
      {error !== "" && error}
      {filterPhotos().map(photo => (
        <img
          key={photo.id}
          src={photo.url}
          alt={photo.title}
          style={{
            border: (photo.albumId + photo.id) % 2 === 0 ? '2px solid pink' : 'none'
          }}
        />
      ))}
    </div>
  );
}

export default PhotoGallery;