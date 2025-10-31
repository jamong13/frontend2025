import React from "react";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Firebase Firestore에 데이터 저장
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      // 성공 메시지
      setSubmitStatus("success");
      alert("Thank you for your message! Your message has been saved.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // 에러 처리
      console.error("Error saving contact:", error);
      setSubmitStatus("error");
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Feel free to reach out if you want to collaborate or just want to
            chat
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div>
              <h3 className="contact-info-title">Let's Talk</h3>
              <p className="contact-info-text">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to get in
                touch.
              </p>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon contact-icon-purple">
                  <FiMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:your.email@example.com">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon contact-icon-blue">
                  <FiPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon contact-icon-green">
                  <FiMapPin />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>New York, USA</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-links">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <p style={{ color: "#10b981", textAlign: "center" }}>
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p style={{ color: "#ef4444", textAlign: "center" }}>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </section>
  );
}
