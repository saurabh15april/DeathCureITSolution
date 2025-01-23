import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
        </div>
    );
};

export default ServiceCard;
