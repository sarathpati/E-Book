
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './Registration';
import Login from './Login'
import Payment from './Payment';
import Home from './Home';
import Book from './Book';
import User from './User';
import Catalog from './Catalog';
import Cart from './Cart';
import { useEffect, useState } from 'react';
import EditProfile from './EditProfile';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Registration setUser={setUser} />}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/singlebook/:id' element={<Book/>}/>
      <Route path='/profile' element={<User user={user}/>}/>
      <Route path="/edit-profile" element={<EditProfile setUser={setUser} />} />
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
