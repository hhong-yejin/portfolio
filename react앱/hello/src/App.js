import Movie from "./components/Movie";
import PropTypes from "prop-types";

function App() {
  return null;
}

Movie.protoType = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
