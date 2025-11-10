import React from 'react'
import StudentSidebar from '../../DashboardComponents/StudentSideBar/StudentSidebar'
import CheckResults from '../../DashboardComponents/CheckResults/CheckResults'
import './CheckResultPage.css'

const CheckResultPage: React.FC = () => {
  return (
    <div className='dashboard-content'>
        <StudentSidebar />
      <div className="dashboard-layout">
        <CheckResults />
      </div>
    </div>
  )
}

export default CheckResultPage
