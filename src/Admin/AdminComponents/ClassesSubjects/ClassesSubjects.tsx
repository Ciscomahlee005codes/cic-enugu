import React, { useState } from "react";
import "./ClassesSubjects.css";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

type Subject = {
  id: number;
  name: string;
  code: string;
};

type ClassItem = {
  id: number;
  name: string;
  subjects: Subject[];
};

const ClassesSubjects: React.FC = () => {
  const [classes, setClasses] = useState<ClassItem[]>([
    { id: 1, name: "JSS 1", subjects: [{ id: 1, name: "Mathematics", code: "MTH101" }, { id: 2, name: "English", code: "ENG101" }] },
    { id: 2, name: "JSS 2", subjects: [{ id: 3, name: "Physics", code: "PHY201" }, { id: 4, name: "Chemistry", code: "CHM201" }] },
  ]);

  const [expandedClassId, setExpandedClassId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [newClassName, setNewClassName] = useState("");
  const [newSubject, setNewSubject] = useState({ name: "", code: "" });
  const [addingSubjectToClass, setAddingSubjectToClass] = useState<number | null>(null);

  // Toggle Class Dropdown
  const toggleClass = (id: number) => {
    setExpandedClassId(expandedClassId === id ? null : id);
  };

  // Open Subject Modal
  const openSubjectModal = (subject: Subject) => {
    setSelectedSubject(subject);
    setShowModal(true);
  };

  // Add new class
  const handleAddClass = () => {
    if (!newClassName) return;
    setClasses(prev => [...prev, { id: prev.length + 1, name: newClassName, subjects: [] }]);
    setNewClassName("");
  };

  // Add new subject
  const handleAddSubject = (classId: number) => {
    if (!newSubject.name || !newSubject.code) return;
    setClasses(prev =>
      prev.map(cls =>
        cls.id === classId
          ? { ...cls, subjects: [...cls.subjects, { ...newSubject, id: cls.subjects.length + 1 }] }
          : cls
      )
    );
    setNewSubject({ name: "", code: "" });
    setAddingSubjectToClass(null);
  };

  return (
    <div className="classes-subjects">
      <h2>Classes & Subjects</h2>

      {/* Add Class */}
      <div className="add-class">
        <input
          type="text"
          placeholder="New Class Name"
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
        />
        <button onClick={handleAddClass}><FaPlus /> Add Class</button>
      </div>

      {/* Classes List */}
      <div className="class-list">
        {classes.map(cls => (
          <div key={cls.id} className="class-item">
            <div className="class-header" onClick={() => toggleClass(cls.id)}>
              <h3>{cls.name}</h3>
              <button onClick={(e) => { e.stopPropagation(); setAddingSubjectToClass(cls.id); }}>
                <FaPlus /> Add Subject
              </button>
            </div>

            {/* Subjects Dropdown */}
            {expandedClassId === cls.id && (
              <ul className="subject-list">
                {cls.subjects.map(sub => (
                  <li key={sub.id} onClick={() => openSubjectModal(sub)}>
                    {sub.name} ({sub.code})
                  </li>
                ))}
              </ul>
            )}

            {/* Add Subject Input */}
            {addingSubjectToClass === cls.id && (
              <div className="add-subject">
                <input
                  type="text"
                  placeholder="Subject Name"
                  value={newSubject.name}
                  onChange={(e) => setNewSubject(prev => ({ ...prev, name: e.target.value }))}
                />
                <input
                  type="text"
                  placeholder="Subject Code"
                  value={newSubject.code}
                  onChange={(e) => setNewSubject(prev => ({ ...prev, code: e.target.value }))}
                />
                <button onClick={() => handleAddSubject(cls.id)}>Add</button>
                <button onClick={() => setAddingSubjectToClass(null)}>Cancel</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Subject Modal */}
      {showModal && selectedSubject && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{selectedSubject.name}</h3>
            <p><strong>Code:</strong> {selectedSubject.code}</p>
            <div className="modal-actions">
              <button className="edit"><FaEdit /> Edit</button>
              <button className="delete"><FaTrash /> Delete</button>
              <button className="close" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassesSubjects;
