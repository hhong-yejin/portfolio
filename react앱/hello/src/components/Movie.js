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
export default Movie;
