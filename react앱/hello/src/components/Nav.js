import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <button onClick={() => navigate("/")}>홈</button>
        <Link to={"/page?genre=Comedy&page=1"}>코미디</Link>
        <Link to={"/page?genre=Romance&page=1"}>로맨스</Link>
        <Link to={"/page?genre=Action&page=1"}>액션</Link>
        <Link to={"/page?genre=Animation&page=1"}>애니메이션</Link>
        <Link to={"/page?genre=Horror&page=1"}>호러</Link>
        <Link to={"/page?genre=Thriller&page=1"}>스릴러</Link>
        <Link to={"/page?genre=Fantasy&page=1"}>판타지</Link>
        <Link to={"/page?genre=Crime&page=1"}>느와르</Link>
        <Link to={"/page?genre=Mystery&page=1"}>미스테리</Link>
        <Link to={"/page?genre=Musical&page=1"}>뮤지컬</Link>
        <Link to={"/page?genre=Documentary&page=1"}>다큐멘터리</Link>
      </nav>
    </div>
  );
}

export default Nav;
