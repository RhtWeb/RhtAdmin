import "./styleFolder/home.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const InfoSection = () => {
  return (
    <div className="infoSection">
      <div className="infoItem">
        <div className="infoHead">Revanue</div>
        <div className="infoStat">
          <div className="infoMoney">&#8377; 3,415</div>
          <div className="infoRate">
            15.5
            <ArrowUpward className="infoIcon" />
          </div>
        </div>
        <div className="sub">
          Compared to last month
        </div>
      </div>
      
      <div className="infoItem">
        <div className="infoHead">Sales</div>
        <div className="infoStat">
          <div className="infoMoney">&#x20B9; 1,005</div>
          <div className="infoRate">
            08.5
            <ArrowUpward className="infoIcon" />
          </div>
        </div>
        <div className="sub">
          Compared to last month
        </div>
      </div>
      
      <div className="infoItem">
        <div className="infoHead">Cost</div>
        <div className="infoStat">
          <div className="infoMoney">&#8377; 1,015</div>
          <div className="infoRate">
            -11.5
            <ArrowDownward className="infoIcon negative" />
          </div>
        </div>
        <div className="sub">
          Compared to last month
        </div>
      </div>
    </div>
  )
}

export default InfoSection;
