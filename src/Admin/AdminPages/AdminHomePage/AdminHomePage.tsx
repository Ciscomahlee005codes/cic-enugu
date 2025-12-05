import React from 'react'
import AdminSidebar from '../../AdminComponents/AdminSidebar/AdminSidebar'
import AdminHome from '../../AdminComponents/AdminHome/AdminHome'

const AdminHomePage: React.FC = () => {
  return (
    <div className='dashboard-content'>
      <AdminSidebar />
       <div className="dashboard-layout">
        <AdminHome />
       </div>
    </div>
  )
}

export default AdminHomePage
