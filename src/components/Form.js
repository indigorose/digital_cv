import './Form.css';
import React from 'react';

const Form = () => {
  return (
    <>
      <div className="form-container">
        <form className="form">
          <label htmlFor="">Your Name</label>{' '}
          <input type="text" name="your name" id="name" />
          <label htmlFor="">Email </label>
          <input type="text" name="email" id="emai" />
          <label htmlFor="">Subject </label>
          <input type="text" name="subject" id="Name" />
          <label htmlFor="">Message </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Type your message here"
          ></textarea>
          <button className="btn">Submit </button>
        </form>
      </div>
    </>
  );
};

export default Form;
