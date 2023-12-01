import React, { useState } from 'react';
import './AdminPanel1.css';
const AdminPanel = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' },
    // Add more user data as needed
  ]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleEdit = (userId) => {
    const selectedUser = users.find((user) => user.id === userId);
    setNewUsername(selectedUser.username);
    setNewPassword(selectedUser.password);
    setSelectedUserId(userId);
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUserId) {
      // Update existing user
      const updatedUsers = users.map((user) =>
        user.id === selectedUserId ? { ...user, username: newUsername, password: newPassword } : user
      );
      setUsers(updatedUsers);
      setSelectedUserId(null);
    } else {
      // Add new user (for demo, generating a random id)
      const newUser = { id: Math.floor(Math.random() * 1000), username: newUsername, password: newPassword };
      setUsers([...users, newUser]);
    }
    // Clear the form inputs after submission
    setNewUsername('');
    setNewPassword('');
  };

  return (
    <div class="container-fluid">
    <div className="container ">
        <div class="row">
            <div class="col-md-12">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="newUsername" className="form-label">New Username</label>
          <input
            type="text"
            className="form-control"
            id="newUsername"
            value={newUsername}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={newPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {selectedUserId ? 'Update User' : 'Add User'}
        </button>
      </form>

      <h2 className="mt-5">User Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleEdit(user.id)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(user.id)}>
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

export default AdminPanel;
