import { BarChart, ChatBubbleOutline, FeedbackOutlined, LineStyle, MailOutline, Money, PersonOutline, PersonPinCircleOutlined, ShopOutlined, Timeline, TrendingUp, WarningTwoTone } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

import "./sidebar.scss"

function Sidebar() {
   return (
      <div className="sidebar-container">
         <div className="wrapper">
            <div className="menu">
               <span className="menu-title">Dashboard</span>
               <ul>
                  <Link to="/">
                     <li className="list-item">
                        <Timeline className="icon"/> <span>Analytics</span>
                     </li>
                  </Link>

                  <Link to="/users">
                     <li className="list-item">
                        <TrendingUp className="icon"/> <span>Sales</span>
                     </li>
                  </Link>
               </ul>
            </div>

            <div className="menu">
               <span className="menu-title">Quick Menu</span>
               <ul>
                  <li className="list-item">
                     <PersonOutline className="icon"/> <span>User</span>
                  </li>
                  <li className="list-item">
                     <ShopOutlined className="icon"/> <span>Products</span>
                  </li>
                  <li className="list-item">
                     <Money className="icon"/> <span>Transactions</span>
                  </li>
                  <li className="list-item">
                     <BarChart className="icon"/> <span>Reports</span>
                  </li>
               </ul>
            </div>

            <div className="menu">
               <span className="menu-title">Notifications</span>
               <ul>
                  <li className="list-item">
                     <MailOutline className="icon"/> 
                     <span>Mail</span>
                  </li>
                  <li className="list-item">
                     <FeedbackOutlined className="icon"/> <span>Feedback</span>
                  </li>
                  <li className="list-item">
                     <ChatBubbleOutline className="icon"/> <span>Messages</span>
                  </li>
               </ul>
            </div>

            <div className="menu">
               <span className="menu-title">Staff</span>
               <ul>
                  <li className="list-item">
                     <PersonPinCircleOutlined className="icon"/> <span>Manage</span>
                  </li>
                  <li className="list-item">
                     <Timeline className="icon"/> <span>Analytics</span>
                  </li>
                  <li className="list-item">
                     <WarningTwoTone className="icon"/> <span>Report</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
