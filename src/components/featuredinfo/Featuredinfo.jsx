import { ArrowUpwardTwoTone } from "@material-ui/icons"
import "./featuredinfo.scss"

const FeaturedInfo = () => {
   return (
      <div className="featured-container">
         <div className="summary">
            <div className="card">
               <span class="title">Revenue</span>
               <div className="progress-wrapper">
                  <span className="current">$2,454</span>
                  <span className="progress">-11.4</span>
                  <ArrowUpwardTwoTone className="arrow-progess"/>
               </div>
               <span>Compared to last month</span>
            </div>

            <div className="card">
               <span class="title">Revenue</span>
               <div className="progress-wrapper">
                  <span className="current">$2,454</span>
                  <span className="progress">-11.4</span>
                  <ArrowUpwardTwoTone className="arrow-progess"/>
               </div>
               <span>Compared to last month</span>
            </div>

            <div className="card">
               <span class="title">Revenue</span>
               <div className="progress-wrapper">
                  <span className="current">$2,454</span>
                  <span className="progress">-11.4</span>
                  <ArrowUpwardTwoTone className="arrow-progess"/>
               </div>
               <span>Compared to last month</span>
            </div>
         </div>
      </div>
   )
}

export default FeaturedInfo
