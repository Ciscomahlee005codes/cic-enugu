import React from 'react'
import "./PaymentHistoryPage.css"
import PaymentHistory from '../../DashboardComponents/PaymentHistory/PaymentHistory'
import StudentSidebar from '../../DashboardComponents/StudentSideBar/StudentSidebar'

const PaymentHistoryPage: React.FC = () => {
  return (
    <div className='dashboard-content'>
        <StudentSidebar />
      <div className="dashboard-layout">
        <PaymentHistory />
      </div>
    </div>
  )
}

export default PaymentHistoryPage
