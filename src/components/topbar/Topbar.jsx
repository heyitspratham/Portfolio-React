import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" >genius.</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 8979072845</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>theprathamshukla@gmail.com</span>
          </div>
        </div>
        <div className="right">
          Right
        </div>
      </div>
    </div>
  )
}
