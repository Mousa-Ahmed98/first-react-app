import { useEffect, useState } from "react";
import { axiosInstance } from "../api/config";
import { MovieCard } from "../MovieCard/MovieCard";
export function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/popular?api_key=70facc41ca9aec579b7da69b6b38498b")
      .then((res) => {
        console.log(res);
        return setMovies(res.data.results)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-2">
        {movies.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <MovieCard movieDetails={movie}/>
            </div>
          );
        })}
      </div>
    </>
  );
}
