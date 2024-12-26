import React from 'react'
import "./index.css"
const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">We would love to hear from you!</p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Write your message"
              />
            </div>

            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2024 Your Company. All rights reserved. | <a href="/privacy-policy">Privacy Policy</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Contact