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

function App() {
  const location = useLocation();

  // paths where navbar must be hidden
  const hideNavbarRoutes = ["/student/auth"];

  const shouldHideNavbar =
    hideNavbarRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/studentdashboard");

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
      </Routes>
    </>
  );
}

export default App;
