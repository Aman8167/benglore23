import React, { useState } from 'react';
import './HomesPage.css';
const EmployeePanel = () => {
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [newSalary, setNewSalary] = useState('');
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', salary: 50000 },
    { id: 2, name: 'Jane Doe', salary: 60000 },
    // Add more employee data as needed
  ]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const handleEmployeeNameChange = (e) => {
    setNewEmployeeName(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setNewSalary(e.target.value);
  };

  const handleAddEmployee = () => {
    if (newEmployeeName && newSalary) {
      const newEmployee = {
        id: Math.floor(Math.random() * 1000),
        name: newEmployeeName,
        salary: parseFloat(newSalary),
      };
      setEmployees([...employees, newEmployee]);
      setNewEmployeeName('');
      setNewSalary('');
    }
  };

  const handleEdit = (employeeId) => {
    const selectedEmployee = employees.find((employee) => employee.id === employeeId);
    setNewEmployeeName(selectedEmployee.name);
    setNewSalary(selectedEmployee.salary.toString());
    setSelectedEmployeeId(employeeId);
  };

  const handleDelete = (employeeId) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== employeeId);
    setEmployees(updatedEmployees);
    setSelectedEmployeeId(null);
  };

  const handleUpdateSalary = () => {
    if (selectedEmployeeId) {
      const updatedEmployees = employees.map((employee) =>
        employee.id === selectedEmployeeId
          ? { ...employee, salary: parseFloat(newSalary) }
          : employee
      );
      setEmployees(updatedEmployees);
      setSelectedEmployeeId(null);
      setNewEmployeeName('');
      setNewSalary('');
    }
  };

  const handleCancel = () => {
    setNewEmployeeName('');
    setNewSalary('');
    setSelectedEmployeeId(null);
  };

  return (
    <div class="container-fluid">
    <div className="container ">
        <div class="row justify-content-center">
            <div class="col-md-10">
      <h2>Employee Management Panel</h2>
      <div className="mb-3">
        <label htmlFor="newEmployeeName" className="form-label">
          Employee Name
        </label>
        <input
          type="text"
          className="form-control"
          id="newEmployeeName"
          value={newEmployeeName}
          onChange={handleEmployeeNameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="newSalary" className="form-label">
          Salary
        </label>
        <input
          type="number"
          className="form-control"
          id="newSalary"
          value={newSalary}
          onChange={handleSalaryChange}
        />
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={handleAddEmployee}>
          Add Employee
        </button>
        {selectedEmployeeId && (
          <>
            <button type="button" className="btn btn-success ms-2" onClick={handleUpdateSalary}>
              Update Salary
            </button>
            <button type="button" className="btn btn-secondary ms-2" onClick={handleCancel}>
              Cancel
            </button>
          </>
        )}
      </div>

      <h2 className="mt-5">Employee Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>${employee.salary.toFixed(2)}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleEdit(employee.id)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  );
};

export default EmployeePanel;