import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(a) {
  return (
    <div>
      <img src={a.coverImg} alt={a.title} />
      <h2>
        <Link to={`/movie/${a.id}`}>{a.title}</Link>
      </h2>
      <p>{a.summary}</p>
      <ul>
        {a.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
