import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Detail Page</h1>
          <img src={movie.large_cover_image} alt={movie.title} />
          <div
            style={{
              display: "inline-block",
              margin: "0px 20px",
              verticalAlign: "top",
            }}
          >
            <h1>{movie.title}</h1>
            <h3>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </h3>
            <p>{movie.date_uploaded}</p>
            <p>{movie.download_count}만 다운로드</p>
            <a href={movie.url}>Go</a>
          </div>
          <h3>
            <Link to="/">뒤로가기</Link>
          </h3>
        </div>
      )}
    </div>
  );
}

export default Detail;
