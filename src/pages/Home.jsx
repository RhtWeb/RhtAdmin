import DataChart from "../components/DataChart";
import InfoSection from "../components/InfoSection";
import "./styleFolder/general.css";

import { userData } from "../dummyData";

const Home = () => {
  return (
    <div className="home">
      <InfoSection />
      <DataChart title="User Analytics" data={userData} dataKey="Active User" grid  />
    </div>
  )
}

export default Home;
