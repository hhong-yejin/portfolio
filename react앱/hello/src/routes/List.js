import Movie from "../components/Movie";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Home.module.css";

function List() {
  const listNums = [...Array(10)].map((_, i) => i + 1);
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("genre");
  const page = searchParams.get("page");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=rating&&genre=${detail}&&page=${page}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovies();
    console.log(detail);
    console.log(page);
  }, [detail, page]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style.container}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              rating={movie.rating}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
          {listNums.map((listNums) => {
            return (
              <button
                onClick={() => {
                  setSearchParams({ genre: `${detail}`, page: `${listNums}` });
                  window.scrollTo(0, 0);
                }}
              >
                {listNums}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default List;
