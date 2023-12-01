import React, { useState } from 'react';
import './Date.css';

const DeliveryTable = () => {
  const [deliveryData, setDeliveryData] = useState([]);
  const [adminInput, setAdminInput] = useState({
    username: '',
    deliveryDate: '',
    phoneNumber: '',
  });

  const handleUpdate = () => {
    // Fetch delivery data from your API or data source
    // Update the 'deliveryData' state with the retrieved data
    // Example: fetch('/api/delivery').then(response => response.json()).then(data => setDeliveryData(data));
    // For simplicity, using hardcoded data
    const mockData = [
      { id: 1, date: '2023-12-01', name: 'John Doe', address: '123 Main St', time: '10:00 AM', phoneNumber: '555-1234' },
      // Add more data as needed
    ];
    setDeliveryData(mockData);
  };

  const filterDeliveryData = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    return deliveryData.filter((delivery) => delivery.date >= currentDate);
  };

  return (
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-10">
    <div className="container mt-5">
      <div className="admin-input">
        <h3>Delivery Table</h3>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={adminInput.username}
          onChange={(e) => setAdminInput({ ...adminInput, username: e.target.value })}
        />
        <label htmlFor="deliveryDate">Delivery Date:</label>
        <input
          type="date"
          id="deliveryDate"
          value={adminInput.deliveryDate}
          onChange={(e) => setAdminInput({ ...adminInput, deliveryDate: e.target.value })}
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={adminInput.phoneNumber}
          onChange={(e) => setAdminInput({ ...adminInput, phoneNumber: e.target.value })}
        />
        <button className="btn btn-primary mt-2" onClick={handleUpdate}>
          Update
        </button>
      </div>
      <div className="delivery-table mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Delivery Date</th>
              <th>Name</th>
              <th>Address</th>
              <th>Time</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {filterDeliveryData().map((delivery) => (
              <tr key={delivery.id}>
                <td>{delivery.date}</td>
                <td>{delivery.name}</td>
                <td>{delivery.address}</td>
                <td>{delivery.time}</td>
                <td>{delivery.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default DeliveryTable;