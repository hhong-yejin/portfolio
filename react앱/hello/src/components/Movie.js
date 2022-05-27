import PropTypes from "prop-types";
import style from "./Movie.module.css";
import { useNavigate } from "react-router";

function Movie(a) {
  const navigate = useNavigate();
  return (
    <div>
      <div className={style.box} onClick={() => navigate(`/movie/${a.id}`)}>
        <img src={a.coverImg} className={style.img} alt={a.title} />
        <div>
          <ul>
            <li>
              <h2>{a.title}</h2>
            </li>
            <li>별점 : {a.rating}</li>
            <li>
              장르 :
              <ul>{a.genres && a.genres.map((g) => <li key={g}>{g}</li>)}</ul>
            </li>
            <li>
              {" "}
              <p className={style.p}>
                {a.summary.length > 300
                  ? `${a.summary.slice(0, 300)}...`
                  : a.summary}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
