import DataChart from "../components/DataChart";
import InfoSection from "../components/InfoSection";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";

import "./styleFolder/general.css";

import { userData } from "../dummyData";

const Home = () => {
  return (
    <div className="home">
      <InfoSection />
      <DataChart title="User Analytics" data={userData} dataKey="Active User" grid  />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;
