import { Visibility } from "@material-ui/icons";
import "./styleFolder/widget.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <h3 className="widgetTitle">New Joined Members</h3>
      <ul className="memberList">
        <li className="memberItem">
          <div className="imgContainer">
            <img src="" alt="" />
          </div>
          <div className="itemData">
            <h5>Rohit Singh </h5>
            <h6>Software Engineer</h6>
          </div>
          <button>
            <Visibility /> Display
          </button>
        </li>
        
        <li className="memberItem">
          <div className="imgContainer">
            <img src="" alt="" />
          </div>
          <div className="itemData">
            <h5>Legend of Legends</h5>
            <h6>MERN Stack</h6>
          </div>
          <button>
            <Visibility /> Display
          </button>
        </li>
        
        <li className="memberItem">
          <div className="imgContainer">
            <img src="" alt="" />
          </div>
          <div className="itemData">
            <h5>Suraj Vaerma </h5>
            <h6>H R</h6>
          </div>
          <button>
            <Visibility /> Display
          </button>
        </li>
        
        <li className="memberItem">
          <div className="imgContainer">
            <img src="" alt="" />
          </div>
          <div className="itemData">
            <h5>Rohit Singh </h5>
            <h6>Software Engineer</h6>
          </div>
          <button>
            <Visibility /> Display
          </button>
        </li>
        
        <li className="memberItem">
          <div className="imgContainer">
            <img src="" alt="" />
          </div>
          <div className="itemData">
            <h5>Rohit Singh </h5>
            <h6>Software Engineer</h6>
          </div>
          <button>
            <Visibility /> Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm;
