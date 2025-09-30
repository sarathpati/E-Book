

import React, { useState } from 'react'
import { whislistdata } from './Whislist'
import { cartdata } from './Cartdata'
import { data } from './Data'
import { useNavigate, useParams } from 'react-router-dom'
import './App.css'
import Header from "./Header";


const Catalog = () => {
  const navigate=useNavigate();
  const[d,setd]=useState(10);
  const id=useParams("id").id;
  const da=data.books;
  const [filteredBooks, setFilteredBooks] = useState(whislistdata.books);
  const alreadyInCart = cartdata.books.some(book => book.id === id);
  const [inCart, setInCart] = useState(alreadyInCart);
  function handleCartClick(bookId) {
      setd(d+10);
      if (!inCart) {
        // Add book to cart
        cartdata.books.push(da[bookId - 1]);
        setInCart(true); // update button label
      } else {
        // Navigate to cart if already in cart
        navigate("/cart");
      }
    }

  return (
    <>
    <Header/>
    {filteredBooks.length>0?(
    <div className='single'>
        {filteredBooks.map((item)=>{
          return(
            <div className="book ">
            <div className="singlebook">
              <div className="book-top">
                <img src={item.coverImage} alt="" />
              </div>
              <div className="book-down">
                <h3>Title:{item.title}</h3>
                <h4>Author:{item.author}</h4>
                <h3>Language:{item.language}</h3>
                <h4>Rating:{item.rating}</h4>
              </div>
              <div className="sub">
              <div className="btn" onClick={()=>{
                console.log(item.id)
              }}><button id='add'onClick={()=>{
                whislistdata.books.pop(whislistdata.books[item.id-1])
                setFilteredBooks(whislistdata.books)
                 setd(d+10)
              }}>Remove</button></div>
              <div className="btn"><button onClick={()=>handleCartClick(item.id)}>
                {inCart?"view Cart":"Add Cart"}
              </button>
              </div>
              </div>
            </div>
            </div>
          )
        })}
      </div>
      ):
        (
          <div >
          <h1 style={{textAlign:'center'}}> Whishlist</h1>
          <p style={{ textAlign:'center'}}>No books are added to Whishlist <a href='./'>continue Shopping</a></p>
          </div>
        )}
    </>
  )
}

export default Catalog
