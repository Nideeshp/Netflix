import React, { useEffect, useState } from "react";
import './Banner.css'
import axios from "axios"; // Import axios correctly
import { API_KEY, imageUrl } from '../../Constants/Constants'

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`);
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[randomIndex]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRandomMovie();
  }, []);

  return (
    <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title || movie.name : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          {movie ? movie.overview : ""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
