import "./contact.scss";
import { useState } from "react";

 const Contact = () => {
   const [message, setMessage] = useState(false);

   const handleSubmit = (e)=> {
     e.preventDefault();
     setMessage(true);
   };

  return (
    <div id="contact" className="contact">
        <div className="left">
        <img src="assets/shake.svg" alt=""/>
        </div>
        <div className="right">
          <h2>Contact:</h2>
          <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"></input>
          <textarea name="" placeholder="Message"></textarea>
          <button type="submit">Contact</button>
          {message && <span>Thanks, I'll get right back to you :)</span> }
          </form>
        </div>
    </div>
  )
}

export default Contact;
