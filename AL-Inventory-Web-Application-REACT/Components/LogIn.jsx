import { useState } from "react";
import "./LogIn.css"
const LogIn = () => {
  //     <div className="login-container">

  // <form id="log-in-form" action="" method="post">

  // </form>
  // </div>
  return (
    <>
    <form className="log-in-form" >
      <label htmlFor="e-mail">Email</label>
      <input id="e-mail" type="text" placeholder="E-mail" name="e-mail" />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        placeholder="Password"
        name="password"
      />
      <button type="submit">Login</button> <br /> </form>
      <br />
      {/* change to an onClick ; i  want when button is clicked, page takes you to inventory */}
      <hr />
      
      <hr />
      
      <br />
      
      <hr />
      <hr />
      <br />
    
      
    </>
  );
};

export default LogIn;
