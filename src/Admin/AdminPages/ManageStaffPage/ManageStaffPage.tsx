import React from 'react'
import ManageStaff from '../../AdminComponents/ManageStaff/ManageStaff'
import AdminSidebar from '../../AdminComponents/AdminSidebar/AdminSidebar'
import "../AdminHomePage/AdminHomePage.css"

const ManageStaffPage: React.FC = () => {
  return (
    <div className='dashboard-content'>
        <AdminSidebar />
      <div className="dashboard-layout">
        <ManageStaff />
      </div>
    </div>
  )
}

export default ManageStaffPage
