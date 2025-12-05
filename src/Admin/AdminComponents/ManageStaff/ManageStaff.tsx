import React, { useState } from "react";
import "./ManageStaff.css";
import { FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

type Staff = {
  id: number;
  name: string;
  staffId: string;
  department: string;
  role: "Academic" | "Non-Academic";
};

const ManageStaff: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Academic" | "Non-Academic">("Academic");
  const [staffList, setStaffList] = useState<Staff[]>([
    { id: 1, name: "Dr. John Smith", staffId: "AC-2024-001", department: "Mathematics", role: "Academic" },
    { id: 2, name: "Mrs. Jane Doe", staffId: "AC-2024-002", department: "Physics", role: "Academic" },
    { id: 3, name: "Mr. Mark Benson", staffId: "NA-2024-001", department: "Maintenance", role: "Non-Academic" },
    { id: 4, name: "Ms. Emily Clark", staffId: "NA-2024-002", department: "Administration", role: "Non-Academic" },
  ]);

  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStaff, setNewStaff] = useState<Partial<Staff>>({ role: "Academic" });

  const filteredStaff = staffList.filter(staff => staff.role === activeTab);

  const openModal = (staff: Staff) => setSelectedStaff(staff);
  const closeModal = () => setSelectedStaff(null);

  const handleAddStaff = () => {
    if (!newStaff.name || !newStaff.staffId || !newStaff.department || !newStaff.role) {
      alert("Please fill all fields");
      return;
    }
    setStaffList(prev => [
      ...prev,
      { ...newStaff, id: prev.length + 1 } as Staff
    ]);
    setShowAddModal(false);
    setNewStaff({ role: "Academic" });
  };

  return (
    <div className="manage-staff">
      <h2>Manage Staff</h2>

      {/* Tabs & Add Button */}
      <div className="tab-actions">
        <div className="tab-buttons">
          <button
            className={activeTab === "Academic" ? "active" : ""}
            onClick={() => setActiveTab("Academic")}
          >
            Academic Staff
          </button>
          <button
            className={activeTab === "Non-Academic" ? "active" : ""}
            onClick={() => setActiveTab("Non-Academic")}
          >
            Non-Academic Staff
          </button>
        </div>
        <button className="add-btn" onClick={() => setShowAddModal(true)}>
          <FaPlus /> Add New Staff
        </button>
      </div>

      {/* Staff Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Staff ID</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map(staff => (
              <tr key={staff.id}>
                <td>{staff.name}</td>
                <td>{staff.staffId}</td>
                <td>{staff.department}</td>
                <td className="actions">
                  <button className="view" onClick={() => openModal(staff)}><FaEye /></button>
                  <button className="edit"><FaEdit /></button>
                  <button className="delete"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Staff Detail Modal */}
      {selectedStaff && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{selectedStaff.name}</h3>
            <p><strong>Staff ID:</strong> {selectedStaff.staffId}</p>
            <p><strong>Department:</strong> {selectedStaff.department}</p>
            <p><strong>Role:</strong> {selectedStaff.role}</p>
            <div className="modal-actions">
              <button className="edit">Edit Staff</button>
              <button className="delete">Remove Staff</button>
              <button className="close" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Staff Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Staff</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={newStaff.name || ""}
              onChange={(e) => setNewStaff(prev => ({ ...prev, name: e.target.value }))}
            />
            <input
              type="text"
              placeholder="Staff ID"
              value={newStaff.staffId || ""}
              onChange={(e) => setNewStaff(prev => ({ ...prev, staffId: e.target.value }))}
            />
            <input
              type="text"
              placeholder="Department"
              value={newStaff.department || ""}
              onChange={(e) => setNewStaff(prev => ({ ...prev, department: e.target.value }))}
            />
            <select
              value={newStaff.role}
              onChange={(e) => setNewStaff(prev => ({ ...prev, role: e.target.value as "Academic" | "Non-Academic" }))}
            >
              <option value="Academic">Academic</option>
              <option value="Non-Academic">Non-Academic</option>
            </select>
            <div className="modal-actions">
              <button className="edit" onClick={handleAddStaff}>Add Staff</button>
              <button className="close" onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStaff;
