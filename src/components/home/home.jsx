import React, { useState } from "react";
import beginnerImg from "../../../public/images/child.svg";
import toddler from "../../../public/images/toddler.svg";
import teenager from "../../../public/images/teenager.svg";
import adult from "../../../public/images/adult.svg";
import upper_Intermediate from "../../../public/images/upper-Intermediate.svg";
import Beginner from "../beginner";

function Home() {
  const [levelPage, setLevelPage] = useState("");

  function selectLevel() {
    setLevelPage("Beginner");
  }

  function backhandle() {
    setLevelPage("");
  }

  return (
    <>
      {levelPage == "" && (
        <div className="wrapper">
          <div className="box" onClick={selectLevel}>
            <img className="box__img" src={beginnerImg} alt="" />
            <h3 className="box__title">Beginner</h3>
            <span className="box__title-subtitle">Boshlang'ich</span>
          </div>
          <div className="box">
            <img className="box__img" src={toddler} alt="" />
            <h3 className="box__title">Elementary</h3>
            <span className="box__title-subtitle">Oddiy daraja</span>
          </div>
          <div className="box">
            <img className="box__img" src={teenager} alt="" />
            <h3 className="box__title">Pre-Intermediate</h3>
            <span className="box__title-subtitle">O'rta daraja</span>
          </div>
          <div className="box">
            <img className="box__img" src={adult} alt="" />
            <h3 className="box__title">Intermediate</h3>
            <span className="box__title-subtitle">O'rta yuqori</span>
          </div>
          <div className="box">
            <img className="box__img" src={upper_Intermediate} alt="" />
            <h3 className="box__title">Upper-Intermediate</h3>
            <span className="box__title-subtitle">Yuqori daraja</span>
          </div>
        </div>
      )}

      {levelPage === "Beginner" && <Beginner backhandle={backhandle} />}
    </>
  );
}

export default Home;
