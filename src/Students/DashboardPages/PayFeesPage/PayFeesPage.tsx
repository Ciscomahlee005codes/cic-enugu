import "./PayFeesPage.css"
import PayFees from '../../DashboardComponents/PayFees/PayFees'
import StudentSidebar from '../../DashboardComponents/StudentSideBar/StudentSidebar'

const PayFeesPage = () => {
  return (
    <div className='dashboard-content'>
        <StudentSidebar />
      <div className="dashboard-layout">
        <PayFees />
      </div>
    </div>
  )
}

export default PayFeesPage
