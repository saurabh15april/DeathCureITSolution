import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = 'Valid email is required.';
        if (!formData.message) newErrors.message = 'Message cannot be empty.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSubmitted(true);
            console.log('Form Submitted:', formData);
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>We would love to hear from you! Fill out the form below to get in touch with us.</p>

            {isSubmitted && (
                <div className="success-message">
                    <p>Thank you for reaching out! We’ll get back to you soon.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>

            {/* Map Section */}
            <section className="visit-us">
                <h2>Visit Us</h2>
                <p>
                    Our office is located in the heart of San Francisco. Feel free to drop by and discuss your
                    project with us.
                </p>
                <div className="visit-details">
                    <div>
                        <h3>Address</h3>
                        <p>Kanpur, Uttar Pradesh</p>
                    </div>
                    <div>
                        <h3>Working Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday - Sunday:  10:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <p>Email: dubesaurabh131@gmail.com</p>
                        
                    </div>
                </div>

                
            </section>
        </div>
    );
};

export default ContactPage;
