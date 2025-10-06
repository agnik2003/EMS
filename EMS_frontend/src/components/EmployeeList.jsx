import React from 'react';
import '../styles/EmployeeList.css';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  if (employees.length === 0) return <p>No employees found.</p>;

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th className="actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(({ id, name, email, position }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{position}</td>
            <td className="actions">
              <button className="btn edit" onClick={() => onEdit({ id, name, email, position })}>Edit</button>
              <button className="btn delete" onClick={() => onDelete(id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
