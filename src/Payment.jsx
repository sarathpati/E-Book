
import React, { useState } from 'react';
import Header from "./Header";

const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    // Here you would handle payment processing logic
    setPaymentSuccess(true);
  };

  return (
    <>
      <Header />
      <div className='pay'>
        {paymentSuccess ? (
          <div className="success-message">
            ✅ Payment Successful!  
            <p>Thank you for your purchase.<a href='./'>continue Shopping</a></p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form">
              <h2>Payment Form</h2>
              <label>Name:</label>
              <input type="text" required />
              <label>Email:</label>
              <input type="email" required />
              <label>Password:</label>
              <input type="password" required />
              <label>Card Number:</label>
              <input type="text" required />
              <label>Expiry Date:</label>
              <input type="month" required />
              <label>CVV:</label>
              <input type="text" required />
              <button type="submit">Submit Payment</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Payment;
