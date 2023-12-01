import React, { useState } from 'react';
import './AdminForm.css';

const AdminForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to handle form submission here
    console.log(`Username: ${username}, Password: ${password}, Contact Number: ${contactNumber}`);
  };

  return (
    <div class="container-fluid"><br></br><br></br>
    <div class="container"><br></br><br></br>
        <h1 class="text-center ">Admin Panel</h1>
        <div class="row justify-content-center ">
            <div class="col-md-6">
      <form onSubmit={handleSubmit}>
        <div class="form-group " >
          <label>Username</label>
          <input
            type="text" class="form-control "
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div class="form-group ">
          <label>Password</label>
          <input
            type="password" class="form-control "
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div class="form-group ">
          <label>Contact Number</label>
          <input
            type="tel" class="form-control "
            placeholder="Enter contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)} 
          />
        </div>
<br></br>
        <button  id="btn"class="btn btn-primary" type="submit">
          Submit</button>
        
      </form>
      </div>
      </div>
    </div>
    </div>
  );
};

export default AdminForm;