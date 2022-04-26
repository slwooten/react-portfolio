import React from 'react';

export default function Contact() {
  return (
    <div class='m-3'>
      <h1>Contact</h1>
      <div class='mb-3'>
        <form>
          <div class='mb-3'>
            <label for='name' class="form-label">Name</label><br></br>
            <input type='text' id='name' name='name' class="form-control"></input><br></br>
          </div>
          <div class='mb-3'>
            <label for='email' class="form-label">Email</label><br></br>
            <input type='text' id='email' name='email' class="form-control"></input>
          </div>
          <div class='mb-3'>
            <label for='message' class="form-label">Message</label><br></br>
            <textarea type='text' id='message' name='message' class="form-control"></textarea>
          </div>
          <button type='submit' class='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  );
}