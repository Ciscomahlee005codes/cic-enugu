import React from 'react'
import "./BookshopPage.css"
import StudentSidebar from '../../DashboardComponents/StudentSideBar/StudentSidebar'
import Bookshop from '../../DashboardComponents/Bookshop/Bookshop'

const BookshopPage: React.FC = () => {
  return (
    <div className='dashboard-content'>
        <StudentSidebar />
      <div className="dashboard-layout">
        <Bookshop />
      </div>
    </div>
  )
}

export default BookshopPage
