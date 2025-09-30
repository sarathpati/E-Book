

// // import React from 'react'
// // import { useNavigate } from 'react-router-dom'

// // const Registration = () => {
// //   const navigate=useNavigate();
// //   return (
// //     <>
// //     <div className='reg'>
// //         <div className="register">
// //           <form>
// //             <div className="regbox">
// //             <h2 align='center'>Register Form</h2>
// //             <label htmlFor='name'>Name:</label>
// //             <input type="text" name="name" id="peru"/>
// //             <label htmlFor='mail'>Email:</label>
// //             <input type="email" name="mail" id="2" />
// //             <label htmlFor='pass'>Password:</label>
// //             <input type="password" name="pass" id="3" />
// //             <label htmlFor='gen'>Gender:</label>
// //             <label>Male:<input type="radio" name="gen" id="4" /></label>
// //             <label>Female:<input type="radio" name="gen" id="5" /></label>
// //             <label htmlFor='check'>Language preferred:</label>
// //             <label>English:<input type="checkbox" name="check" id="6" /></label>
// //             <label>Telugu:<input type="checkbox" name="check" id="7" /></label>
// //             <label>Hindi:<input type="checkbox" name="check" id="8" /></label>
// //             <label>Phone Number:<input type="number" name="phno" id="9" /></label>
// //             <div className="end">
// //               <button onClick={()=>{
// //                 navigate("/register")
// //               }}>Cancel</button>
// //               <button onClick={()=>{
// //                 navigate("/");
// //               }}>Submit</button>
// //             </div>
// //             </div>
// //             </form>
// //         </div>
// //     </div>
// //     </>
// //   )
// // }
// // export default Registration

// import React, { useState } from "react";
// import "./App.css";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     password: "",
//     role: "User",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Registering user:", formData);
//     // Here you can call your API to register the user
//   };

//   return (
//     <div className="register-page">
//       <div className="register-card">
//         <h2>Create Your Account</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             required
//           />
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone"
//           />
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             placeholder="Address"
//           />
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//           >
//             <option value="User">User</option>
//             <option value="Admin">Admin</option>
//           </select>

//           <button type="submit" className="submit-btn">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import "./App.css";

const Register = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "User",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    localStorage.setItem("user", JSON.stringify(formData)); // save to localStorage
    navigate("/profile");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="User">User</option>
          <option value="Author">Author</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Register</button>
        <p class="para">Already have an account?<a onClick={()=>{navigate("/login")}}><Link>sign in</Link></a></p>
      </form>
    </div>
  );
};

export default Register;
