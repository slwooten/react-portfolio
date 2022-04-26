import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <form>
          <label for='name'>Name</label><br></br>
          <input type='text' id='name' name='name'></input>
          <label for='email'>Email</label><br></br>
          <input type='text' id='email' name='email'></input>
          <label for='message'>Message</label><br></br>
          <input type='text' id='message' name='message'></input>
          <input type='submit' value='submit'></input>
        </form>
      </div>
    </div>
  );
}