import React from 'react'
import StudentSidebar from '../../DashboardComponents/StudentSideBar/StudentSidebar'
import DashboardHome from '../../DashboardComponents/DashboardHome/DashboardHome'
import "./DashboardHomepage.css"

const DashboardHomepage: React.FC = () => {
  return (
    <div className='dashboard-content'>
      <StudentSidebar />
      <div className="dashboard-layout">
        <DashboardHome />
      </div>
    </div>
  )
}

export default DashboardHomepage
