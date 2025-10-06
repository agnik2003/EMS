import React, { useState, useEffect } from 'react';
import '../styles/EmployeeForm.css'
const EmployeeForm = ({ employee, onSubmit, onCancel }) => {
  const [name, setName] = useState(employee?.name || '');
  const [email, setEmail] = useState(employee?.email || '');
  const [position, setPosition] = useState(employee?.position || '');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setName(employee?.name || '');
    setEmail(employee?.email || '');
    setPosition(employee?.position || '');
  }, [employee]);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!position.trim()) newErrors.position = "Position is required";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({ id: employee?.id, name, email, position });
    if (!employee?.id) {
      setName('');
      setEmail('');
      setPosition('');
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Position</label>
        <input value={position} onChange={e => setPosition(e.target.value)} />
        {errors.position && <span className="error">{errors.position}</span>}
      </div>
      <div className="form-actions">
        <button type="submit">{employee?.id ? 'Update' : 'Add'}</button>
        {employee?.id && <button type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default EmployeeForm;
