import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './StudentAuthForm.css';

const StudentAuthForm: React.FC = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    uniqueId: '',
    role: 'student', // default role
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleToggleForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      uniqueId: '',
      role: 'student',
    });
    setIsLoginForm(prev => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const simulateLoading = (callback: () => void) => {
    setIsLoading(true);
    setTimeout(() => {
      callback();
      setIsLoading(false);
    }, 1000);
  };

  const handleLogin = () => {
  simulateLoading(() => {
    console.log("Login:", formData);
    alert(`Logged in as ${formData.role}!`);

    if (formData.role === "student") {
      navigate("/studentdashboard/home");
    } else if (formData.role === "alumni") {
      navigate("/studentdashboard/alumni");
    }
  });
};

const handleSignUp = () => {
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  simulateLoading(() => {
    console.log("Sign Up:", formData);
    alert(`Signed up as ${formData.role}!`);

    if (formData.role === "student") {
      navigate("/studentdashboard/home");
    } else if (formData.role === "alumni") {
      navigate("/studentdashboard/alumni");
    }
  });
};


  return (
    <div className="auth-container">
      <div className="auth-image"></div>
      <div className="auth-form">
        <AnimatePresence mode="wait">
          {isLoginForm ? (
            <motion.div
              key="login"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="form-box"
            >
              <h2>SEMPER !!!</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              /> 
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="student">Student</option>
                <option value="alumni">Alumni</option>
              </select><br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="uniqueId"
                placeholder="Unique ID"
                value={formData.uniqueId}
                onChange={handleInputChange}
                required
              />
              <button onClick={handleLogin} disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              <p onClick={handleToggleForm}>
                Don't have an account? <span>Sign Up</span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="form-box"
            >
              <h2>Create Account</h2>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
               <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="student">Student</option>
                <option value="alumni">Alumni</option>
              </select><br />
              <input
                type="text"
                name="uniqueId"
                placeholder="Unique ID"
                value={formData.uniqueId}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <button onClick={handleSignUp} disabled={isLoading}>
                {isLoading ? 'Signing up...' : 'Sign Up'}
              </button>
              <p onClick={handleToggleForm}>
                Already have an account? <span>Login</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StudentAuthForm;
