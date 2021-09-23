import "./styleFolder/home.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const InfoSection = () => {
  return (
    <div className="infoSection">
      <div className="infoItem">
        <div className="infoHead">Revanue</div>
        <div className="infoStat">
          <div className="infoMoney">$1,415</div>
          <div className="infoRate">
            -11.5
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
          <div className="infoMoney">$1,415</div>
          <div className="infoRate">
            -11.5
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
          <div className="infoMoney">$1,415</div>
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
