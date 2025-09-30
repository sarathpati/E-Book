

import './App.css'
import React, { useState } from 'react'
import { data } from './Data'
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import { cartdata } from './Cartdata';
import { whislistdata } from './Whislist';

const Book = () => {
  const navigate = useNavigate();
  const id = parseInt(useParams("id").id);
  const booksList = data.books;

  // Check if this book is already in cart
  const alreadyInCart = cartdata.books.some(book => book.id === id);
  const alreadyInWhish = whislistdata.books.some(book => book.id === id);
  const [inCart, setInCart] = useState(alreadyInCart);
  const [inWhish, setInWhish] = useState(alreadyInWhish);


  // Add to cart or view cart
  function handleCartClick(bookId) {
    console.log(inCart+"jkbedjibuyyygtttyy");
    if (!inCart) {
      // Add book to cart
      cartdata.books.push(booksList[bookId - 1]);
      setInCart(true); // update button label
    } else {
      // Navigate to cart if already in cart
      navigate("/cart");
    }
  }

  // Add to wishlist (optional)
  function handleWishlistClick(bookId) {
    console.log(inCart+"jkbedjibuyyygtttyy");
    if (!inWhish) {
      // Add book to cart
      whislistdata.books.push(booksList[bookId - 1]);
      setInWhish(true); // update button label
    } else {
      // Navigate to cart if already in cart
      navigate("/catalog");
    }
  }

  return (
    <>
      <Header/>
      <div className="single">
        <div className='book'>
          <div className="singlebook">
            <div className="book-top">
              <img src={booksList[id - 1].coverImage} alt="" />
            </div>
            <div className="book-down">
              <h3>Title: {booksList[id - 1].title}</h3>
              <h3>Author: {booksList[id - 1].author}</h3>
              <h3>Language: {booksList[id - 1].language}</h3>
              <h4>Rating: {booksList[id - 1].rating}</h4>
            </div>
            <div className="sub">
              <div className="btn">
                <button onClick={() => handleWishlistClick(booksList[id - 1].id)}>
                {inWhish ? "View List" : "Add List"}
                </button>
              </div>
              <div className="btn">
                <button
                  onClick={() => handleCartClick(booksList[id - 1].id)}
                >
                {inCart ? "View Cart" : "Add Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Book;
