import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
const Intro = props => {

  const textRef = useRef();

  useEffect(()=>{
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Developer", "Designer", "Content Creator", "Influencer"],
      });
      },[]);
  return (
    <div id="intro" className="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/happyMan1.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There. I'm </h2>
            <h1>Albert Klassen</h1>
            <h3>Freelance <span ref={textRef}></span></h3>

          </div>
          <a href="#portfolio">
            <img src="assets/downArrow.png" alt=""/>
          </a>
        </div>
    </div>
  )
};

export default Intro;
