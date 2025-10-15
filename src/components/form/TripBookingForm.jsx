'use client';

import { useState, useEffect } from 'react';
import "./tripbooking.css";

export default function TripBookingForm({ closeModal }) {
  const [currentPage, setCurrentPage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    duration: '',
    person: '',
    country: '',
    query: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPage(window.location.href);
    }
  }, []);

  const handleChange = (e) => {
    const {name,value} = e.target

    setFormData({
      ...formData,
       [name]: value,
      
    
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.contact.trim()) newErrors.contact = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Arrival date is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.person) newErrors.person = 'Number of persons is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ...formData, 
          currentPage: currentPage,
          submittedAt: new Date().toISOString()
        }),
      });

      const data = await response.json()
    
      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          contact: '',
          date: '',
          duration: '',
          person: '',
          country: '',
          query: ''
        });
        
        // Auto-close modal after success (optional)
        setTimeout(() => {
          closeModal();
        }, 3000);
        
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center">
      <div className="form-container">
        <span
          className="close-button-query-form"
          onClick={closeModal}
          aria-label="Close form"
        >
          &times;
        </span>

        <h3>Query Form</h3>

        {submitStatus === 'success' && (
          <div className="success-message">
            Thank you! Your request has been submitted successfully. We'll get back to you within 24 hours.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            There was an error submitting your request. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Your form fields remain the same */}
          <div className="form-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <i className="fas fa-phone"></i>
              <input
                type="tel"
                name="contact"
                placeholder="Phone *"
                value={formData.contact}
                onChange={handleChange}
                className={errors.contact ? 'error' : ''}
              />
              {errors.contact && <span className="error-text">{errors.contact}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <i className="fas fa-calendar-alt"></i>
              <input
                type="text"
                name="date"
                placeholder="Arrival Date *"
                value={formData.date}
                onChange={handleChange}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                className={errors.date ? 'error' : ''}
              />
              {errors.date && <span className="error-text">{errors.date}</span>}
            </div>

            <div className="form-group">
              <i className="fas fa-clock"></i>
              <input
                type="number"
                name="duration"
                placeholder="Duration (days) *"
                value={formData.duration}
                onChange={handleChange}
                className={errors.duration ? 'error' : ''}
                min="1"
              />
              {errors.duration && <span className="error-text">{errors.duration}</span>}
            </div>
          </div>

          <div className="form-group">
            <i className="fas fa-users"></i>
            <input
              type="number"
              name="person"
              placeholder="Number of Persons *"
              value={formData.person}
              onChange={handleChange}
              className={errors.person ? 'error' : ''}
              min="1"
            />
            {errors.person && <span className="error-text">{errors.person}</span>}
          </div>

          <div className="form-group">
            <i className="fas fa-globe"></i>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <i className="fas fa-question-circle"></i>
            <textarea
              name="query"
              placeholder="Query"
              value={formData.query}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>

        <div className="form-footer">
          <p>We'll get back to you within 24 hours</p>
        </div>
      </div>
    </div>
  );
}