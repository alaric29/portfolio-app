import "./topbar.scss";
import {Person, Mail} from '@material-ui/icons';


const Topbar = props => {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">clever.</a>
          <div className="itemContainer">
          <Person className="icon"/>
          <span>+604 250 5000</span>
          </div>
          <div className="itemContainer">
          <Mail className="icon"/>
          <span>vulpine@clever.io</span>
          </div>
        </div>

        <div className="right">
        <div className="hamburger">
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
        </div>
      </div>
    </div>
  )
};

export default Topbar;
