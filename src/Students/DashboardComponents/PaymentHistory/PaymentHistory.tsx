import React, { useState } from "react";
import "./PaymentHistory.css";
import { FaFileDownload } from "react-icons/fa";

interface Payment {
  id: number;
  type: string;
  amount: number;
  date: string;
  status: "Paid" | "Pending" | "Failed";
}

const PaymentHistory: React.FC = () => {
  const [payments] = useState<Payment[]>([
    { id: 1, type: "Tuition Fee", amount: 25000, date: "2025-10-01", status: "Paid" },
    { id: 2, type: "Lab Fee", amount: 5000, date: "2025-10-03", status: "Paid" },
    { id: 3, type: "Library Fee", amount: 2000, date: "2025-10-05", status: "Paid" },
    { id: 4, type: "Sports Fee", amount: 1500, date: "2025-10-07", status: "Pending" },
  ]);

  const downloadPDF = (payment: Payment) => {
    // Placeholder function: can integrate jsPDF or any PDF generator later
    alert(`Download PDF for ${payment.type} of ₦${payment.amount.toLocaleString()}`);
  };

  return (
    <div className="payment-history-container">
      <h2>Payment History</h2>
      <div className="payment-table">
        <div className="table-header">
          <span>#</span>
          <span>Payment Type</span>
          <span>Amount</span>
          <span>Date</span>
          <span>Status</span>
          <span>Download</span>
        </div>
        {payments.map((payment) => (
          <div className="table-row" key={payment.id}>
            <span>{payment.id}</span>
            <span>{payment.type}</span>
            <span>₦{payment.amount.toLocaleString()}</span>
            <span>{payment.date}</span>
            <span className={`status ${payment.status.toLowerCase()}`}>{payment.status}</span>
            <span>
              <button className="download-btn" onClick={() => downloadPDF(payment)}>
                <FaFileDownload />
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
