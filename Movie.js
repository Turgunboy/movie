import React from "react";
import "./Movie.css";

const IMAGES_API = "https://image.tmdb.org/t/p/w1280";

const setVoteCalss = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

function Movie({ image, title, poster_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img src={IMAGES_API + poster_path} alt={title} />
      {/* <img src={image} alt="tesla" /> */}
      <div className="movie-info">
        <h1>{title}</h1>
        <span className={setVoteCalss(vote_average)}>{vote_average}</span>
      </div>
      <div className="movie-over">
        <h1>Overview</h1>
        {/* <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore
          sed sapiente! Explicabo, velit mollitia quasi aliquam libero, error
          sed sapiente! Explicabo, velit mollitia quasi aliquam libero, error
          sed sapiente! Explicabo, velit mollitia quasi aliquam libero, error
          sed sapiente! Explicabo, velit mollitia quasi aliquam libero, error
          nostrum fuga quis, impedit eligendi voluptas corrupti iure numquam
          rerum reiciendis. Magni iste voluptatibus eligendi ipsam non similique
          voluptas quos, dolores, quaerat labore dignissimos aut quae accusamus
          veniam aliquid. Itaque asperiores expedita minima voluptatem,
          repudiandae possimus. Unde nobis quam voluptatem enim mollitia ducimus
          accusantium odio quis. Culpa perspiciatis voluptatem eum eveniet
          dolorem praesentium, officiis voluptas corrupti vel labore deleniti
          temporibus dolore facere minima, id earum enim commodi odio non,
          deserunt nisi magni? Neque quisquam unde consequatur necessitatibus
          veritatis autem facilis itaque enim tempora.
        </p> */}
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
