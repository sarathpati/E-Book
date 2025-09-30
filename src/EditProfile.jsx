import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css"; // Reuse your styles

const EditProfile = ({ setUser }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get user details from navigation state
  const currentUser = location.state?.user || {};

  const [formData, setFormData] = useState({
    name: currentUser.name || "",
    email: currentUser.email || "",
    phone: currentUser.phone || "",
    address: currentUser.address || "",
    role: currentUser.role || "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save profile
  const handleSave = (e) => {
    e.preventDefault();

    // Update user globally
    if (setUser) {
      setUser(formData);
    }

    // Store in localStorage if you are persisting
    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/profile"); // redirect back to profile page
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-name">Edit Profile</h2>
        <form onSubmit={handleSave} className="profile-form">
          <label className="info-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="info-input"
          />

          <label className="info-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="info-input"
          />

          <label className="info-label">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="info-input"
          />

          <label className="info-label">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="info-input"
          />

          <label className="info-label">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="info-input"
          />

          <div className="profile-actions">
            <button type="submit" className="btn btn-blue">Save</button>
            <button type="button" className="btn btn-red" onClick={() => navigate("/profile")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
