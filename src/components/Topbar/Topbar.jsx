import "./topbar.scss";

const Topbar = props => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">clever.</a>
        </div>

        <div className="right"></div>
      </div>
    </div>
  )
};

export default Topbar;
