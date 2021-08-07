import ActiveUserChart from "../../components/chart/ActiveUserChart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import LatestTransaction from "../../components/latesttransaction/LatestTransaction"
import NewMember from "../../components/newmember/NewMember"
import "./home.scss"

const Home = () => {
   return (
      <div className="home-container">
         <FeaturedInfo/>
         <ActiveUserChart/>
         <div className="flex-row mr-h-30 wrapper">
            <NewMember/>
            <LatestTransaction/>
         </div>
      </div>
   )
}

export default Home
