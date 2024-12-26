import React from 'react'

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-title">Our Story</h1>
            <p className="hero-subtitle">Building the future, one innovation at a time</p>
            <button className="cta-button">Get in Touch</button>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="about-content">
        <div className="container">
          <div className="split-layout">
            <div className="text-section">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-description">
                We are a passionate team of innovators committed to transforming industries and making the world a better place through our cutting-edge solutions.
              </p>
            </div>
            <div className="image-section">
              <img src="https://via.placeholder.com/400x300" alt="Team" className="about-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="split-layout">
            <div className="image-section">
              <img src="https://via.placeholder.com/400x300" alt="Values" className="about-image" />
            </div>
            <div className="text-section">
              <h2 className="section-title">Our Values</h2>
              <p className="section-description">
                Integrity, collaboration, and a commitment to excellence guide everything we do. Our values are at the core of our success and growth.
              </p>
            </div>
          </div>
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

export default About