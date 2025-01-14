import React from 'react';

const AddPrescription = () => {
    const [error, setError] = React.useState(false);
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [type, setType] = React.useState('');
    const [company, setCompany] = React.useState('');
    const addPrescription = async () => {

        if (!name || !price || !type || !company) {
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        
        let result = await fetch("http://localhost:3001/add-prescription", {
            method: "post",
            body: JSON.stringify({ name, price, type, company, userId }),
            headers: {
                "Content-type": "application/json"
            }
        });
        
        result = await result.json();
        console.warn(result)
    }

    return (
        <div className="add-prescription">
            <h1>Add Prescription</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
            {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type="text" placeholder="Price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}
            <input type="text" placeholder="Type: Oral/Intravenous etc." value={type} onChange={(e) => { setType(e.target.value) }} />
            {error && !type && <span className='invalid-input'>Enter valid type</span>}
            <input type="text" placeholder="Company/Vendor" value={company} onChange={(e) => { setCompany(e.target.value) }} />
            {error && !company && <span className='invalid-input'>Enter valid vendor</span>}
            <button onClick={addPrescription}>Add Prescription</button>
        </div>
    );
};

export default AddPrescription;
