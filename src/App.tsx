import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AdmissionHome from "./Pages/Admission/AdmissionHome";
import Register from "./Pages/Admission/Register";
import HomePage from "./Pages/Home/HomePage";
import AdmissionStatus from "./Pages/Admission/AdmissionStatus";
import PaymentPage from "./Pages/Admission/PaymentPage";
import Onboarding from "./Pages/Admission/Onboarding";
import StudentAuthForm from "./Students/StudentAuthForm";
import CheckResultPage from "./Students/DashboardPages/CheckResultPage/CheckResultPage";
import DashboardHomepage from "./Students/DashboardPages/DashboardHomePage/DashboardHomepage";
import BookshopPage from "./Students/DashboardPages/BookshopPage/BookshopPage";
import SchoolOutfitsPages from "./Students/DashboardPages/SchoolOutfitsPages/SchoolOutfitsPages";
import PayFeesPage from "./Students/DashboardPages/PayFeesPage/PayFeesPage";
import PaymentHistoryPage from "./Students/DashboardPages/PaymentHistoryPage/PaymentHistoryPage";
import AlumniCredentialRequest from "./Students/Alumni/AlumniCredentialRequest";
import AdminStaffPortal from "./StaffPortal/AdminStaffPortal";
import AcademicStaffList from "./StaffPortal/AcademicStaffList";
import AcademicStaffDetails from "./StaffPortal/AcademicStaffDetails"
import NonAcademicStaffList from "./StaffPortal/NonAcademicStaffList"
import NonAcademicStaffDetails from "./StaffPortal/NonAcademicStaffDetails"
import AdminAuth from "./Admin/AdminComponents/AdminAuth/AdminAuth";
import AdminHomePage from "./Admin/AdminPages/AdminHomePage/AdminHomePage";
import ManageStudentPage from "./Admin/AdminPages/ManageStudentPage/ManageStudentPage";
import ManageStaffPage from "./Admin/AdminPages/ManageStaffPage/ManageStaffPage";
import ClassesSubjectPage from "./Admin/AdminPages/ClassesSubjectPage/ClassesSubjectPage";
import NotificationPage from "./Admin/AdminPages/NotificationPage/NotificationPage";
import Settings from "./Admin/AdminPages/Settings/Settings";

function App() {
  const location = useLocation();

  // paths where navbar must be hidden
  const hideNavbarRoutes = ["/student/auth"];

  const shouldHideNavbar =
  hideNavbarRoutes.includes(location.pathname) ||
  location.pathname.startsWith("/studentdashboard") ||
  location.pathname.startsWith("/admin");


  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admission/portal" element={<AdmissionHome />} />
        <Route path="/admission/register" element={<Register />} />
        <Route path="/admission/status" element={<AdmissionStatus />} />
        <Route path="/payment/form" element={<PaymentPage />} />
        <Route path="/admission/onboarding" element={<Onboarding />} />

        {/* Student Portal */}
        <Route path="/student/auth" element={<StudentAuthForm />} />
         <Route path="/studentdashboard/home" element={<DashboardHomepage />} />
        <Route path="/studentdashboard/checkResult" element={<CheckResultPage />} />
        <Route path="/studentdashboard/bookshop" element={<BookshopPage />} />
         <Route path="/studentdashboard/uniforms" element={<SchoolOutfitsPages />} />
         <Route path="/studentdashboard/payment" element={<PayFeesPage />} />
         <Route path="/studentdashboard/paymenthistory" element={<PaymentHistoryPage />} />
         {/* Alumni */}
         <Route path="/studentdashboard/alumni" element={<AlumniCredentialRequest/>} />
         {/* Staffs */}
         <Route path="/AdminStaff" element={<AdminStaffPortal/>} />
         <Route path="/AdminStaff/list" element={<AcademicStaffList />} />
           <Route path="/staff/:id" element={<AcademicStaffDetails />} />
           <Route path="/non-academic" element={<NonAcademicStaffList />} />
           <Route path="/non-academic/:id" element={<NonAcademicStaffDetails />} />

           {/* Admin Routes */}
           <Route path="/admin/auth" element={<AdminAuth />} />
            <Route path="/admindashboard/home" element={<AdminHomePage />} />
            <Route path="/admindashboard/managestudents" element={<ManageStudentPage />} />
            <Route path="/admindashboard/managestaff" element={<ManageStaffPage />} />
            <Route path="/admindashboard/classessubject" element={<ClassesSubjectPage />} />
            <Route path="/admindashboard/schoolupdates" element={<NotificationPage />} />
            <Route path="/admindashboard/systemsettings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
