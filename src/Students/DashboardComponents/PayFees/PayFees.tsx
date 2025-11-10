import React, { useState } from "react";
import "./PayFees.css";

interface FeeItem {
  name: string;
  amount: number;
}

const PayFees: React.FC = () => {
  const student = {
    name: "John Doe",
    matric: "STU-2024-0301",
    class: "JSS 1 – A",
    img: "https://via.placeholder.com/70",
  };

  const [term, setTerm] = useState("1st Term");
  const [fees] = useState<FeeItem[]>([
    { name: "Tuition Fee", amount: 25000 },
    { name: "Lab Fee", amount: 5000 },
    { name: "Library Fee", amount: 2000 },
    { name: "Sports Fee", amount: 1500 },
    { name: "Other Charges", amount: 1000 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState("Card");

  const totalAmount = fees.reduce((acc, fee) => acc + fee.amount, 0);

  const handlePay = () => {
    alert(`Payment of ₦${totalAmount.toLocaleString()} for ${term} using ${paymentMethod} was successful!`);
  };

  return (
    <div className="payfees-container">
      {/* Student Info */}
      <div className="student-info-card">
        <img src={student.img} alt={student.name} className="student-avatar" />
        <div>
          <h3>{student.name}</h3>
          <p>{student.class} | {student.matric}</p>
        </div>
      </div>

      {/* Term Selection */}
      <div className="term-select">
        <label>Select Term:</label>
        <select value={term} onChange={(e) => setTerm(e.target.value)}>
          <option value="1st Term">1st Term</option>
          <option value="2nd Term">2nd Term</option>
          <option value="3rd Term">3rd Term</option>
        </select>
      </div>

      {/* Fees List */}
      <div className="fees-list">
        {fees.map((fee, index) => (
          <div className="fee-item" key={index}>
            <span>{fee.name}</span>
            <span>₦{fee.amount.toLocaleString()}</span>
          </div>
        ))}
        <div className="fee-item total">
          <strong>Total</strong>
          <strong>₦{totalAmount.toLocaleString()}</strong>
        </div>
      </div>

      {/* Payment Method */}
      <div className="payment-method">
        <label>Payment Method:</label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="Card">Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="USSD">USSD</option>
        </select>
      </div>

      <button className="pay-btn" onClick={handlePay}>Pay Now</button>
    </div>
  );
};

export default PayFees;
