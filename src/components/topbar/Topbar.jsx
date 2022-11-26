import "./topbar.scss"
import {Person, Mail, LinkedIn, GitHub} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar "+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" >PS.</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91-8979072845</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>theprathamshukla@gmail.com</span>
          </div>
          
          <div className="itemContainer">
          <a target="_blank" href="http://linkedin.com/in/heyitspratham">

            <LinkedIn className="icon" />
          </a>
          </div>
          <div className="itemContainer">
          <a target="_blank" rel="noreferrer"href="http://github.com/heyitspratham">
            <GitHub className="icon" />

          </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
