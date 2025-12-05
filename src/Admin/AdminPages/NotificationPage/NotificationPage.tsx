import React from 'react'
import "../AdminHomePage/AdminHomePage.css"
import AdminSidebar from '../../AdminComponents/AdminSidebar/AdminSidebar'
import NotificationAnnouncement from '../../AdminComponents/NotificationAnnouncement/NotificationAnnouncement'

const NotificationPage: React.FC = () => {
  return (
    <div className='dashboard-content'>
        <AdminSidebar />
      <div className="dashboard-layout">
        <NotificationAnnouncement />
      </div>
    </div>
  )
}

export default NotificationPage
