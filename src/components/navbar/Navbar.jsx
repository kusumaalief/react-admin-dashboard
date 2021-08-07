import { Language, Notifications, Settings } from '@material-ui/icons'
import React from 'react'

import "./navbar.scss"


const Navbar = () => {
   return (
      <div className="navbar-container">
         <div className="left-container">
            <h1>Admin Panel</h1>
         </div>
         <div className="right-container">
            <div className="wrapper">
               <div className="icon-container">
                  <Notifications/>
                  <span className="icon-badge">1</span>
               </div>
               <div className="icon-container">
                  <Language/>
                  <span className="icon-badge">2</span>
               </div>
               <div className="icon-container">
                  <Settings/>
               </div>
               <img src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile" />
            </div>
         </div>
      </div>
   )
}

export default Navbar
