

// import React, { useState } from 'react'
// import Nav from './Nav'
// import { useNavigate } from 'react-router-dom'
// import { data } from './Data';

// const Header = ({ onSearch }) => {
//   const navigate = useNavigate();
//   const [nav, setNav] = useState(false);
//   const [searchText, setSearchText] = useState("");

//   function changenav() {
//     setNav(!nav);
//   }

//   function updateSearch(e) {
//     const value = e.target.value;
//     setSearchText(value);

//     // Filter books by title
//     const filteredBooks = data.books.filter(book =>
//       book.title.toLowerCase().includes(value.toLowerCase())
//     );

//     if (onSearch) {
//       onSearch(filteredBooks);
//     }
//   }

//   return (
//     <div className="head">
//       <div className="head-left">
//         <div className="nav" onClick={changenav}>=</div>
//         {nav ? <Nav /> : ""}
//         <div className="title">
//           <div className="img"><img src="\bookhouselogo.jpg" alt="" /></div>
//           <div className="title-r"><h2>Dass Book House</h2></div>
//         </div>
//       </div>
//       <div className="head-right">
//         <input
//           type="search"
//           value={searchText}
//           onChange={updateSearch}
//           placeholder='Search books...'
//           className='search'
//         />
//         <div className="headbtn col-5">
//           <button onClick={() => navigate("/catalog")}>Wishlist</button>
//           <button onClick={() => navigate("/cart")}>Cart</button>
//           <button onClick={() => navigate("/profile")}>User</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import Nav from "./Nav";
import { data } from "./Data";
import "./App.css";

const Header = ({ onSearch }) => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Toggle mobile nav
  const toggleNav = () => setShowNav(!showNav);

  // Search handler
  const updateSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filteredBooks = data.books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    if (onSearch) onSearch(filteredBooks);
  };

  return (
    <header className="header">
      {/* Left */}
      <div className="nav" onClick={toggleNav}>=
          {showNav ? <Nav /> : ""}
      </div>
      <div className="header-left">

        <div className="brand" onClick={() => navigate("/")}>
          <img src="/bookhouselogo.jpg" alt="Logo" className="brand-logo" />
          <h1 className="brand-title">Dass Book House</h1>
        </div>
      </div>

      {/* Center - Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books, authors, genres..."
          value={searchText}
          onChange={updateSearch}
        />
        <button className="search-btn">
          <Search size={18} />
        </button>
      </div>

      {/* Right */}
      <div className="header-right">
        <button className="icon-btn" onClick={() => navigate("/catalog")}>
          <Heart size={22} />
        </button>
        <button className="icon-btn" onClick={() => navigate("/cart")}>
          <ShoppingCart size={22} />
        </button>
        <button className="icon-btn" onClick={() => navigate("/profile")}>
          <User size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
