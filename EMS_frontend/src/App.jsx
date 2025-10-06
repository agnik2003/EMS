import React, { useState, useEffect } from "react";

import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import SearchBar from "./components/SearchBar";
import Modal from "./components/Modal";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableEmployee, setEditableEmployee] = useState(null);

  const fetchEmployees = async () => {
    const url = searchKeyword
      ? `/api/employees/search?name=${searchKeyword}`
      : "/api/employees";

    try {
      const response = await fetch(url);
      if (response.ok) setEmployees(await response.json());
    } catch (e) {
      // But never reset state to empty just because of a fetch error
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [searchKeyword]);

  const handleEdit = (employee) => {
    setEditableEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditableEmployee(null);
  };

  const handleAdd = async (employeeData) => {
    const response = await fetch("/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employeeData),
    });
    if (response.ok) {
      fetchEmployees();
    }
  };

  const handleUpdate = async (employeeData) => {
    const response = await fetch(`/api/employees/${employeeData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employeeData),
    });
    if (response.ok) {
      fetchEmployees();
      closeModal();
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      const response = await fetch(`/api/employees/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchEmployees();
      }
    }
  };

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchKeyword.trim() !== "") {
        const resp = await fetch(`/api/employees/search?name=${searchKeyword}`);
        if (resp.ok) setSuggestions(await resp.json());
      } else {
        setSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [searchKeyword]);

  const handleSearch = () => {
    fetchEmployees();
  };

  const handleSelectSuggestion = (name) => {
    setSearchKeyword(name);
    fetchEmployees();
  };
  const handleDownloadExcel = () => {
    if (!employees.length) return;
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "employees.xlsx");
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>
      <SearchBar
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        suggestions={suggestions}
        onSearch={handleSearch}
        onSelect={handleSelectSuggestion}
      />

      <button
        className="btn download"
        onClick={handleDownloadExcel}
        style={{ float: "right", marginBottom: "20px" }}
      >
        Download Excel
      </button>

      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <h2>Add New Employee</h2>
      <EmployeeForm onSubmit={handleAdd} />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Edit Employee</h2>
          <EmployeeForm
            employee={editableEmployee}
            onSubmit={handleUpdate}
            onCancel={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
