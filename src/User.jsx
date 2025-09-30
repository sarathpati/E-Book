

import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./App.css"; // Import CSS file
import { data, useNavigate } from "react-router-dom";




const User = ({ user }) => {
  const navigate=useNavigate();
  const [Data,SetData]=useState(1);
  const handleLogout = () => {
      localStorage.removeItem("user"); 

      navigate("/login");
  };
  const handleEditProfile = () => {
      navigate("/edit-profile", { state: { user } });
  };



  return (
    <div className="profile-container">
      {/* Profile Card */}
      <div className="profile-card">
        {/* Profile Header */}
        <div className="profile-header">
          <FaUserCircle size={64} className="profile-avatar" />
          <div>
            {user ? (
              <>
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-email">{user.email}</p>
              </>
            ) : (
              <h2 className="profile-welcome">Welcome to DassBookHouse</h2>
            )}
          </div>
        </div>

        {/* Profile Content */}
        <div className="profile-content">
          {user ? (
            <>
              {/* Account Details */}
              <div className="profile-grid">
                <div>
                  <h3 className="info-label">Phone</h3>
                  <p className="info-value">{user.phone || "Not added"}</p>
                </div>
                <div>
                  <h3 className="info-label">Address</h3>
                  <p className="info-value">{user.address || "Not added"}</p>
                </div>
                <div>
                  <h3 className="info-label">Role</h3>
                  <p className="info-value capitalize">{user.role}</p>
                </div>
                <div>
                  <h3 className="info-label">Joined</h3>
                  <p className="info-value">{user.joinedDate}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="profile-actions">
                <button className="btn btn-blue" onClick={handleEditProfile}>Edit Profile</button>
                <button className="btn btn-red" onClick={handleLogout}>Logout</button>

              </div>
            </>
          ) : (
            <div className="auth-buttons">
              <button className="btn btn-blue full" onClick={()=>{navigate("/login")}}>Login</button>
              <button className="btn btn-green full" onClick={()=>{navigate("/register")}}>Register</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
