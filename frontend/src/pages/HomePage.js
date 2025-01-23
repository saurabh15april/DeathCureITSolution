import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';

const HomePage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/api/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <h1>Welcome to Death Cure IT Solution</h1>
            <div>
                {services.map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
