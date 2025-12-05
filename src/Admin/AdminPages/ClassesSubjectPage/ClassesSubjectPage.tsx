import React from 'react'
import ClassesSubjects from '../../AdminComponents/ClassesSubjects/ClassesSubjects'
import "../AdminHomePage/AdminHomePage.css"
import AdminSidebar from '../../AdminComponents/AdminSidebar/AdminSidebar'

const ClassesSubjectPage: React.FC = () => {
  return (
    <div  className='dashboard-content'>
      <AdminSidebar />
      <div className="dashboard-layout">
        <ClassesSubjects />
      </div>
    </div>
  )
}

export default ClassesSubjectPage
