import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './AdminAuth.css';

const AdminAuth: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      alert("Please enter all fields");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      console.log("Admin Login:", formData);
      alert("Welcome Admin!");
      navigate("/admindashboard/home");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-image"></div>

      <div className="auth-form">
        <motion.div
          className="form-box"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>ADMIN LOGIN</h2>

          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={formData.email}
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

          <button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <p className="forgot-pass">Forgot Password?</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminAuth;
