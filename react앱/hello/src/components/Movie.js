import PropTypes from "prop-types";

function Movie(a) {
  return (
    <div>
      <img src={a.coverImg} alt={a.title} />
      <h2>{a.title}</h2>
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
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
