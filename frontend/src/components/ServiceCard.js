import React from 'react';
import './ServiceCard';

const ServiceCard = ({ service }) => {
    return (
        <div className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceCard;
