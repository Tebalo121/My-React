// src/components/UserManagement.js
import React, { useState } from 'react';
import './UserManagement.css'; // Import CSS for styling

const UserManagement = ({ onLogout }) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, newUser]);
      setNewUser({ name: '', email: '' });
      alert('User added successfully');
    }
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    alert('User deleted successfully');
  };

  const handleEditUser = (index) => {
    setNewUser(users[index]);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    const updatedUsers = users.map((user, i) => 
      i === editIndex ? newUser : user
    );
    setUsers(updatedUsers);
    setNewUser({ name: '', email: '' });
    setEditIndex(null);
    alert('User updated successfully');
  };

  return (
    <div>
      <h2>User Management</h2>
      <div>
        <input
          type="text"
          placeholder="User Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="User Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        {editIndex !== null ? (
          <button onClick={handleSaveEdit} className="edit-button">Save Edit</button>
        ) : (
          <button onClick={handleAddUser} className="add-button">Add User</button>
        )}
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
            <button onClick={() => handleEditUser(index)} className="edit-button">Edit</button>
            <button onClick={() => handleDeleteUser(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={onLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default UserManagement;