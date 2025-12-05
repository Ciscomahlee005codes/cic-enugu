import React from 'react'
import "../AdminHomePage/AdminHomePage.css"
import AdminSidebar from '../../AdminComponents/AdminSidebar/AdminSidebar'
import ManageStudents from '../../AdminComponents/ManageStudents/ManageStudents'

const ManageStudentPage: React.FC = () => {
  return (
    <div className='dashboard-content'>
        <AdminSidebar />
      <div className="dashboard-layout">
        <ManageStudents />
      </div>
    </div>
  )
}

export default ManageStudentPage
