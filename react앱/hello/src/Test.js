import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((event) => !event);
//   return (
//     <div>
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//       {showing ? <Hello /> : null}
//     </div>
//   );
// }

// function Hello() {
//   useEffect(() => {
//     console.log("created :)");
//     return () => console.log("destoroyed );");
//   }, []);
//   return <h1>Hello</h1>;
// }

// useState, useEffect, module.css 등
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((number) => number + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("난 한 번만 실행됩니다.");
  }, []);
  useEffect(() => {
    console.log("난 카운터가 변할 때만 실행됩니다.");
  }, [counter]);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 4) {
      console.log(
        "난 키워드가 있고 5글자 이상일 때, 키워드가 변하면 실행됩니다.",
        keyword
      );
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>www</button>
      <Button text={"countinue"} />
    </div>
  );
}

export default App;
