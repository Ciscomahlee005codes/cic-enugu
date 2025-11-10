import React, { useState } from "react";
import "./CheckResults.css";

const CheckResults = () => {
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="checkresult-page">
      <div className="check-form-card">
        <h2>Academic Result Portal</h2>
        <p className="subtitle">Enter your details to retrieve your result</p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Academic Session</label>
              <select required>
                <option value="">Select</option>
                <option>2024/2025</option>
                <option>2023/2024</option>
                <option>2022/2023</option>
              </select>
            </div>

            <div className="form-group">
              <label>Term</label>
              <select required>
                <option value="">Select</option>
                <option>First Term</option>
                <option>Second Term</option>
                <option>Third Term</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Student Reg / Matric Number</label>
            <input type="text" placeholder="e.g. STU-2024-0301" required />
          </div>

          <button className="btn-submit" type="submit">
            View Result
          </button>
        </form>
      </div>

      {/* Loading Modal */}
      {loading && (
        <div className="modal-overlay">
          <div className="loader-card">
            <div className="spinner"></div>
            <p>Fetching result...</p>
          </div>
        </div>
      )}

      {/* Result Popup */}
      {showResult && (
        <div className="modal-overlay">
          <div className="result-modal">
            <h3>Student Result — 2024/2025 (First Term)</h3>
            <p className="student-info">Name: John Doe — Matric: STU-2024-0301</p>

            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>CA (40)</th>
                  <th>Exam (60)</th>
                  <th>Total</th>
                  <th>Grade</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mathematics</td><td>32</td><td>55</td><td>87</td><td>A</td><td>Excellent</td>
                </tr>
                <tr>
                  <td>English</td><td>28</td><td>48</td><td>76</td><td>B</td><td>Very Good</td>
                </tr>
                <tr>
                  <td>Physics</td><td>34</td><td>50</td><td>84</td><td>A</td><td>Excellent</td>
                </tr>
              </tbody>
            </table>

            <div className="modal-actions">
              <button className="btn-download">Download PDF</button>
              <button className="btn-close" onClick={() => setShowResult(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default CheckResults;
