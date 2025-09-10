import React, { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent successfully!');
  };

  // Inline styles
  const formStyles = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop: '50px',
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333',
  };

  const formGroupStyles = {
    marginBottom: '1rem',
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#555',
  };

  const inputStyles = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  };

  const textareaStyles = {
    ...inputStyles,
    minHeight: '100px',
  };

  const submitButtonStyles = {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const submitButtonHoverStyles = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={formStyles}>
      <h2 style={headerStyles}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyles}>
          <label htmlFor="name" style={labelStyles}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyles}
            required
          />
        </div>
        <div style={formGroupStyles}>
          <label htmlFor="email" style={labelStyles}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyles}
            required
          />
        </div>
        <div style={formGroupStyles}>
          <label htmlFor="phone" style={labelStyles}>Phone No:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyles}
            required
          />
        </div>
        <div style={formGroupStyles}>
          <label htmlFor="message" style={labelStyles}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyles}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={submitButtonStyles}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = submitButtonHoverStyles.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = submitButtonStyles.backgroundColor}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
