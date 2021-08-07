import ActiveUserList from "../list/ActiveUserList"
import "./newmember.scss"

const NewMember = () => {
   return (
      <div className="newmember-container card">
         <h3>New Join Members</h3>
         <div className="wrapper">
            <ActiveUserList/>
            <ActiveUserList/>
            <ActiveUserList/>
            <ActiveUserList/>
            <ActiveUserList/>
         </div>
      </div>
   )
}

export default NewMember
