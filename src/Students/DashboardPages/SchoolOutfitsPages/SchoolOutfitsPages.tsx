import React from 'react'
import "./SchoolOutfitsPages.css"
import StudentSidebar from '../../DashboardComponents/StudentSideBar/StudentSidebar'
import SchoolOutfits from '../../DashboardComponents/SchoolOutfits/SchoolOutfits'

const SchoolOutfitsPages: React.FC = () => {
  return (
    <div className='dashboard-content'>
        <StudentSidebar />
      <div className="dashboard-layout">
        <SchoolOutfits />
      </div>
    </div>
  )
}

export default SchoolOutfitsPages
