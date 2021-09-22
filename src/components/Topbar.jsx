import "./styleFolder/bar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <h1>Rht Admin Panel</h1>
      </div>
      <div className="right">
        <div className="topIconContent">
          <NotificationsNone className="icon" />
          <span className="IconCounter">2</span>
        </div>
        <div className="topIconContent">
          <Language className="icon" />
          <span className="IconCounter">2</span>
        </div>
        <div className="topIconContent">
          <Settings className="icon" />
          {/* <span className="IconCounter">2</span> */}
        </div>
        <div className="imgContainer">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Topbar;
