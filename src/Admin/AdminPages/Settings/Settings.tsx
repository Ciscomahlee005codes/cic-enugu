import React from 'react'
import "../AdminHomePage/AdminHomePage.css"
import SystemSettings from '../../AdminComponents/SystemSettings/SystemSettings'
import AdminSidebar from '../../AdminComponents/AdminSidebar/AdminSidebar'

const Settings: React.FC = () => {
  return (
    <div className='dashboard-content'>
        <AdminSidebar />
      <div className="dashboard-layout">
        <SystemSettings />
      </div>
    </div>
  )
}

export default Settings
