import React from 'react';
import './HomePage.css';
import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const services = [
        { title: 'Custom Websites', description: 'Tailored websites for your business.' },
        { title: 'Mobile Apps', description: 'User-friendly mobile applications.' },
        { title: 'E-commerce Solutions', description: 'Build scalable online stores.' },
    ];

    const handleClick = () => {
        alert('Thank you for reaching out! We will get back to you soon. If you have urgent inquiries, feel free to email us at Our Email.');
    };

    

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Death Cure IT Solution</h1>
                    <p>Empowering businesses with cutting-edge IT solutions.</p>
                    <button className="cta-button" onClick={ handleClick
                    }> Get started </button>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <h2>Our Services</h2>
                <p>We provide a range of services to help you achieve your business goals.</p>
                <div className="service-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="features-grid">
                    <div className="feature">
                        <h3>Innovative Solutions</h3>
                        <p>We use the latest technologies to deliver modern and innovative solutions.</p>
                    </div>
                    <div className="feature">
                        <h3>Customizable Designs</h3>
                        <p>Every project is tailored to your specific needs and vision.</p>
                    </div>
                    <div className="feature">
                        <h3>24/7 Support</h3>
                        <p>Our team is always available to assist you whenever you need help.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial-grid">
                    <div className="testimonial">
                        <p>"Death Cure IT Solution transformed our ideas into reality. Highly recommended!"</p>
                        <span>- Shubham Pawar</span>
                    </div>
                    <div className="testimonial">
                        <p>"The team provided exceptional service and support throughout our project."</p>
                        <span>- R.B.Prashad</span>
                    </div>
                    <div className="testimonial">
                        <p>"Amazing attention to detail and highly professional delivery!"</p>
                        <span>- Aasif Malik</span>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta">
                <h2>Ready to Start Your Project?</h2>
                <p>Contact us today to bring your ideas to life!</p>
                <button className="cta-button" onClick={
                   handleClick
                    }>Contact</button>
            </section>
        </div>
    );
};

export default HomePage;
