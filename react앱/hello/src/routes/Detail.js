import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import style from "./Detail.module.css";

function Detail() {
  const moveHref = () => {
    document.location.href = `${movie.url}`;
  };
  const navigate = useNavigate();
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
        <div
          className={style.div}
          style={{ backgroundImage: `url(${movie.background_image})` }}
        >
          <button onClick={() => navigate("/")}>뒤로가기</button>
          {/* <h3>
            <Link to="/">뒤로가기</Link>
          </h3> */}
          <div className={style.box} onClick={moveHref}>
            <img
              className={style.img}
              src={movie.large_cover_image}
              alt={movie.title}
            />
            <div>
              <h1>{movie.title}</h1>
              <ul>
                <li>별점 : {movie.rating}</li>
                <li>
                  장르 :
                  <ul>
                    {movie.genres &&
                      movie.genres.map((g) => <li key={g}>{g}</li>)}
                  </ul>
                </li>
                <li>개봉일 : {movie.year}</li>
                <li>상영 시간 : {movie.runtime}분</li>
                <li>{movie.download_count}회 다운로드</li>
                <li>
                  {movie.description_intro.length > 500
                    ? `${movie.description_intro.slice(0, 500)}...`
                    : movie.description_intro}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
