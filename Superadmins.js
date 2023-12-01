import React, { useState } from 'react';
import './Superadmins.css';
const AdminManagement = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [superAdminCredentials, setSuperAdminCredentials] = useState({
    username: '',
    password: '',
  });
  const [adminCredentials, setAdminCredentials] = useState({
    username: '',
    password: '',
  });
  const [newAdminCredentials, setNewAdminCredentials] = useState({
    username: '',
    password: '',
  });

  const handleSuperAdminLogin = () => {
    // Super admin authentication logic
    // For simplicity, checking hardcoded credentials
    if (superAdminCredentials.username === 'superadmin' && superAdminCredentials.password === 'password') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const handleAdminLogin = () => {
    // Admin authentication logic
    // For simplicity, checking hardcoded credentials
    if (adminCredentials.username === 'admin' && adminCredentials.password === 'password') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const handleCreateAdmin = () => {
    // Logic to create a new admin
    // For simplicity, log the new admin credentials
    console.log('New Admin Created:', newAdminCredentials);
  };

  return (
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-10">
    <div className="container mt-5">
      <div>
        <h3>Super Admin Login</h3>
        <label htmlFor="superAdminUsername">Username:</label>
        <input
          type="text"
          id="superAdminUsername"
          value={superAdminCredentials.username}
          onChange={(e) => setSuperAdminCredentials({ ...superAdminCredentials, username: e.target.value })}
        />
        <label htmlFor="superAdminPassword">Password:</label>
        <input
          type="password"
          id="superAdminPassword"
          value={superAdminCredentials.password}
          onChange={(e) => setSuperAdminCredentials({ ...superAdminCredentials, password: e.target.value })}
        />
        <button className="btn btn-primary mt-2" onClick={handleSuperAdminLogin}>
          Login as Super Admin
        </button>
      </div>

      <div className="mt-4">
        <h3>Admin Login</h3>
        <label htmlFor="adminUsername">Username:</label>
        <input
          type="text"
          id="adminUsername"
          value={adminCredentials.username}
          onChange={(e) => setAdminCredentials({ ...adminCredentials, username: e.target.value })}
        />
        <label htmlFor="adminPassword">Password:</label>
        <input
          type="password"
          id="adminPassword"
          value={adminCredentials.password}
          onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })}
        />
        <button className="btn btn-primary mt-2" onClick={handleAdminLogin}>
          Login as Admin
        </button>
      </div>

      {isAdmin && (
        <div className="mt-4">
          <h3>Create New Admin</h3>
          <label htmlFor="newAdminUsername">Username:</label>
          <input
            type="text"
            id="newAdminUsername"
            value={newAdminCredentials.username}
            onChange={(e) => setNewAdminCredentials({ ...newAdminCredentials, username: e.target.value })}
          />
          <label htmlFor="newAdminPassword">Password:</label>
          <input
            type="password"
            id="newAdminPassword"
            value={newAdminCredentials.password}
            onChange={(e) => setNewAdminCredentials({ ...newAdminCredentials, password: e.target.value })}
          />
          <button className="btn btn-success mt-2" onClick={handleCreateAdmin}>
            Create Admin
          </button>
        </div>
      )}
    </div>
    </div>
    </div>
    </div>
  );
};

export default AdminManagement;