
import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import {
  Home,
  BookOpen,
  UserPlus,
  LogIn,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  LayoutDashboardIcon,
} from "lucide-react";
import { AiFillFire } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { FaRegCommentDots,FaQuestionCircle } from "react-icons/fa";

import "./App.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">=
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-links">
        <NavLink to="/" className="side-link">
          <Home size={20} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/catalog" className="side-link">
          <BookOpen size={20} />
          <span>Catalog</span>
        </NavLink>
        <NavLink to="/register" className="side-link">
          <AiFillFire size={20} />
          <span>Trending</span>
        </NavLink>
        <NavLink to="/about" className="side-link">
          <MdLibraryBooks size={20} />
          <span>About</span>
        </NavLink>
        <NavLink to="/helpme" className="side-link">
          <FaQuestionCircle size={20} />
          <span>Help?</span>
        </NavLink>
        <NavLink to="/about" className="side-link">
          <FaRegCommentDots size={20} />
          <span>Feedback</span>
        </NavLink>
      </nav>

      {/* Footer / Logout */}
      <div className="sidebar-footer">
        <NavLink to="/logout" className="side-link">
          <LogOut size={20} />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
