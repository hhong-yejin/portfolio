// import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import github_img from "../img/github.png";

function Nav() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className={style.nav}>
        <div>
          <button className={style.button} onClick={() => navigate(-1)}>
            back
          </button>
          <button className={style.button} onClick={() => navigate(1)}>
            forwad
          </button>
        </div>
        <Link className={style.link} to={"/"}>
          홈
        </Link>
        <div className={style.dropdown}>
          <p className={style.dropbtn}>장르</p>
          <div className={style.dropdownContent}>
            <Link className={style.link} to={"/page?genre=Comedy&page=1"}>
              코미디
            </Link>
            <Link className={style.link} to={"/page?genre=Romance&page=1"}>
              로맨스
            </Link>
            <Link className={style.link} to={"/page?genre=Action&page=1"}>
              액션
            </Link>
            <Link className={style.link} to={"/page?genre=Animation&page=1"}>
              애니메이션
            </Link>
            <Link className={style.link} to={"/page?genre=Horror&page=1"}>
              호러
            </Link>
            <Link className={style.link} to={"/page?genre=Thriller&page=1"}>
              스릴러
            </Link>
            <Link className={style.link} to={"/page?genre=Fantasy&page=1"}>
              판타지
            </Link>
            <Link className={style.link} to={"/page?genre=Crime&page=1"}>
              느와르
            </Link>
            <Link className={style.link} to={"/page?genre=Mystery&page=1"}>
              미스테리
            </Link>
            <Link className={style.link} to={"/page?genre=Musical&page=1"}>
              뮤지컬
            </Link>
            <Link className={style.link} to={"/page?genre=Documentary&page=1"}>
              다큐멘터리
            </Link>
          </div>
        </div>
        <button className={style.button}>
          <img
            onClick={() =>
              window.open("https://github.com/hhong-yejin/portfolio")
            }
            className={style.button_img}
            src={github_img}
            alt="github"
          />
        </button>
      </nav>
    </div>
  );
}

export default Nav;
