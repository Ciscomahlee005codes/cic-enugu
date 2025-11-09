import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import AdmissionHome from "./Pages/Admission/AdmissionHome"
import Register from "./Pages/Admission/Register"
import HomePage from "./Pages/Home/HomePage"
import AdmissionStatus from "./Pages/Admission/AdmissionStatus"
import PaymentPage from "./Pages/Admission/PaymentPage"
import Onboarding from "./Pages/Admission/Onboarding"
import StudentAuthForm from "./Students/StudentAuthForm"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admission/portal" element={<AdmissionHome />} />
      <Route path="/admission/register" element={ <Register />} />
      <Route path="/admission/status" element={<AdmissionStatus />} />
       <Route path="/payment/form" element={<PaymentPage />} />
       <Route path="/admission/onboarding" element={<Onboarding />} />

       {/* Student Portal */}
       <Route path="/student/auth" element={<StudentAuthForm />} />
    </Routes> 
    </>
  )
}

export default App
