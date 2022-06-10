import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import List from "./routes/List";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/page" element={<List />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
