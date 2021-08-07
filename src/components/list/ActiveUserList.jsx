import { Visibility } from "@material-ui/icons"
import "./activeuserlist.scss"

const ActiveUserList = () => {
   return (
      <div className="user-list">
         <img src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="photo" />
         <div className="name-wrapper">
            <h4>Anna Keller</h4>
            <span>Software Engineer</span>
         </div>
         <button className="btn btn-disable">
            <Visibility className="icon"/>
            <span>Display</span>
         </button>
      </div>
   )
}

export default ActiveUserList
