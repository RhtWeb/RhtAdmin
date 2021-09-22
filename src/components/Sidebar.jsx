import React from 'react';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <span>Dashboard</span>
        <div className="menuWrapper">
          <div className="menuItem">
            <LineStyle className="sidebarIcon" /> Home
          </div>
          <div className="menuItem">
            <Timeline className="sidebarIcon" /> Analytics
          </div>
          <div className="menuItem">
            <TrendingUp className="sidebarIcon" /> Sales
          </div>
        </div>
      </div>
      
      <div className="menu">
        <span>Quick Menu</span>
        <div className="menuWrapper">
          <div className="menuItem">
            <PermIdentity className="sidebarIcon" /> Users
          </div>
          <div className="menuItem">
            <Storefront className="sidebarIcon" /> Products
          </div>
          <div className="menuItem">
            <AttachMoney className="sidebarIcon" /> Transactions
          </div>
          <div className="menuItem">
            <BarChart className="sidebarIcon" /> Reports
          </div>
        </div>
      </div>

      <div className="menu">
        <span>Notifications</span>
        <div className="menuWrapper">
          <div className="menuItem">
            <MailOutline className="sidebarIcon" /> Mail
          </div>
          <div className="menuItem">
            <DynamicFeed className="sidebarIcon" /> Feedback
          </div>
          <div className="menuItem">
            <ChatBubbleOutline className="sidebarIcon" /> Messages
          </div>
        </div>
      </div>

      <div className="menu">
        <span>Staff</span>
        <div className="menuWrapper">
          <div className="menuItem">
            <WorkOutline className="sidebarIcon" /> Manage
          </div>
          <div className="menuItem">
            <Timeline className="sidebarIcon" /> Analytics
          </div>
          <div className="menuItem">
            <Report className="sidebarIcon" /> Reports
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
