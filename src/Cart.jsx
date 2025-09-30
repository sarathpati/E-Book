
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { cartdata } from './Cartdata';
import './App.css'
import Header from './Header';

const Cart = () => {
  const navigate=useNavigate()
  const[a,seta]=useState(10);
  const [filteredBooks, setFilteredBooks] = useState(cartdata.books);

  return (
    <>
    <Header/>
    {filteredBooks.length > 0 ? (
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
                seta(a+10);
                cartdata.books.pop(cartdata.books[item.id-1])
                setFilteredBooks(cartdata.books);
              }}>Remove</button></div>
              <div className="btn"><button id='view'onClick={()=>{
                navigate('/payment')
              }}>Buy</button></div>
              </div>
            </div>
            </div>
          )
        })}
        </div>
        ): (
          <div>
            <header><h1>CartList Page</h1></header>
            <p style={{ textAlign:'center'}}>No books are added to Cart <a href='./'>continue Shopping</a></p>
          </div>
        )}
    </>
  )
}

export default Cart
