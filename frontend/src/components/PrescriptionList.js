import React, { useEffect, useState } from 'react';

const PrescriptionList = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    useEffect(() => {
        getPrescriptions();

    }, []);

    const getPrescriptions = async () => {
        let result = await fetch('http://localhost:3001/prescriptions');
        result = result.json();
        setPrescriptions(result);
    }

    <ul>
        <li>ID</li>
        <li>Name</li>
        <li>Price</li>
        <li>Type</li>
    </ul>



    console.warn(prescriptions);

    return (
        <div className="products-list">
            <h3>Prescription List</h3>
        </div>
    )
}

export default PrescriptionList;