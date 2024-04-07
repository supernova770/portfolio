import { React, useState } from "react";
import "./card.css";
import { Chip } from "../chip";

export const Card = ({ href, name }) => {
  const [textShouldExtend, setTextShouldExtend] = useState(false)
  function handleTextExtend() {
    setTextShouldExtend(prevState => !prevState);
  }
  return (
    <div className="card">
      <div className="innerCard">
        <h2 id="portfolio-text-title">Hi there!</h2>
        <div id="portfolio-text-container">
          <p id="portfolio-text-body">
            My name is Sietze. I am working on user-centered experiences with my
            diverse UX design and frontend development skills.
          </p>
          <div id={textShouldExtend ? "portfolio-text-extended-active" : "portfolio-text-extended-inactive"}>
            I believe that design can solve problems in a way that is both
            pleasing and impactful adressing both human needs and business constraints. 
            This is achieved through a swift meticulous process of problem analysis, innovative solution 
            exploration and prototyping, incorporation of user feedback, and the deliberate implementation of
            design choices rooted in sound logical reasoning. 
          </div>
        </div>
        <p onClick={handleTextExtend} id="button-extend">
          {textShouldExtend ? "read less" : "read more..."}
        </p>
        <hr id="text-hr" />
        <div className="chip-list">
          <Chip
            name={"Behance"}
            href={"https://www.behance.net/sietzevanda20e"}
          />
          <Chip name={"Codepen"} href={"https://codepen.io/svandes"} />
          <Chip name={"GitHub"} href={"https://github.com/supernova770"} />
          <Chip
            name={"React DDL | WIP"}
            href={"https://supernova770.github.io/dropdown-showcase/"}
          />
        </div>
      </div>
    </div>
  );
};
