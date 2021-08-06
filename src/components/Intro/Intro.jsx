import "./intro.scss";

const Intro = props => {
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
            <h1>Alaric Ve</h1>
            <h3>Freelance <span>Developer</span></h3>

          </div>
          <a href="#portfolio">
            <img src="assets/downArrow.png" alt=""/>
          </a>
        </div>
    </div>
  )
};

export default Intro;
