import { CalendarToday, CalendarTodayOutlined, CalendarViewDayOutlined, GpsNotFixedOutlined, MailOutlined, PeopleOutline, PeopleTwoTone, PersonOutline, PhoneAndroidOutlined } from '@material-ui/icons'
import './userdetail.scss'

const UserDetail = () => {

   // ================== PROSES STOP HERE ==================== //
   
   const handleChange = (e) =>{
      // this.setState = 
   }
   
   // ================== PROSES STOP HERE ==================== //
   return (
      <div className="container">
         <div className="top-container">
            <h1>Edit User</h1>
            <button class="btn btn-create">Create</button>
         </div>
         <div className="content-container">
            <div className="flex-row">
               <div className="profile-container card">
                  <div className="profile">
                     <img src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile" className="profile-photo" />
                     <div className="name-wrapper">
                        <span className="name">
                           Ada Smith
                        </span>
                        <span className="job">
                           Software Engineer
                        </span>
                     </div>
                  </div>
                  <div className="account-detail">
                     <span className="title">Account Detail</span>
                     <span className="username"><PersonOutline className="icon"/> adasmith99</span>
                     <span className="date-birth"><CalendarTodayOutlined className="icon"/> 9.12.1990</span>
                  </div>
                  <div className="contact-detail">
                     <span className="title">Contact Detail</span>
                     <span className="phone"><PhoneAndroidOutlined className="icon"/> +1 821 478 289</span>
                     <span className="email"><MailOutlined className="icon"/> adasmith99@gmail.com</span>
                     <span className="place"><GpsNotFixedOutlined className="icon"/> New York | USA</span>
                  </div>
               </div>
               <div className="edit-container card">
                  <h2 className="title">
                     Edit
                  </h2>
                  <div className="wrapper">
                     <div className="input-column">
                        <div className="input-group">
                           <label htmlFor="username">Username</label>
                           <input type="text" name="username"/>
                        </div>
                        <div className="input-group">
                           <label htmlFor="fullname">Full Name</label>
                           <input type="text" name="fullname" value="Anna Becker" onChange={()=>handleChange(this)}/>
                        </div>
                        <div className="input-group">
                           <label htmlFor="email">Email</label>
                           <input type="text" name="email" value="adasmith99@gmail.com" />
                        </div>
                        <div className="input-group">
                           <label htmlFor="phone">Phone</label>
                           <input type="text" name="phone" value="+1 821 478 289" />
                        </div>
                        <div className="input-group">
                           <label htmlFor="Address">Address</label>
                           <input type="text" name="Address" value="USA | New York" />
                        </div>
                     </div>
                     <div className="right-column">
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UserDetail
