import React, { useState } from "react";
import "./ManageStudents.css";
import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";

type Student = {
  id: number;
  name: string;
  matric: string;
  class: string;
  status: "Active" | "Inactive";
};

const ManageStudents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "John Doe", matric: "STU-2024-001", class: "JSS 1 – A", status: "Active" },
    { id: 2, name: "Jane Smith", matric: "STU-2024-002", class: "JSS 1 – B", status: "Active" },
    { id: 3, name: "Mark Johnson", matric: "STU-2024-003", class: "JSS 2 – A", status: "Inactive" },
    { id: 4, name: "Emily Davis", matric: "STU-2024-004", class: "JSS 2 – B", status: "Active" },
  ]);

  const classes = ["All", "JSS 1 – A", "JSS 1 – B", "JSS 2 – A", "JSS 2 – B"];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value);
  };

  const filteredStudents = students.filter(
    (student) =>
      (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.matric.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedClass === "All" || student.class === selectedClass)
  );

  return (
    <div className="manage-students">
      <h2>Manage Students</h2>

      {/* Filter Section */}
      <div className="filter-bar">
        <select value={selectedClass} onChange={handleClassChange}>
          {classes.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or matric..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {/* Students Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Matric Number</th>
              <th>Class</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.matric}</td>
                  <td>{student.class}</td>
                  <td className={student.status === "Active" ? "status-active" : "status-inactive"}>
                    {student.status}
                  </td>
                  <td className="actions">
                    <button className="view"><FaEye /></button>
                    <button className="edit"><FaEdit /></button>
                    <button className="delete"><FaTrash /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;
