import React from 'react';
import './OfficeSpaces.css';

const OfficeSpaces = () => {
    const mainOffice = {
        name: 'WorkHub Central',
        rent: 75000,
        address: 'Sector 5, Salt Lake, Kolkata',
        image: 'https://plugspaces.com/wp-content/uploads/2022/10/office-space-india-image.jpg'
    };

    const offices = [
        {
            name: 'TechSquare',
            rent: 55000,
            address: 'MG Road, Bangalore',
        },
        {
            name: 'CreativeBay',
            rent: 63000,
            address: 'Bandra, Mumbai',
        },

        {
            name: 'InnovateSpace',
            rent: 45000,
            address: 'Hitech City, Hyderabad',
        },

        {
            name: 'FutureWorks',
            rent: 82000,
            address: 'CyberHub, Gurgaon',
        }
    ];

    return(
        <div style={{ padding: '20px'}}>
            <h1>Office Spaces Available</h1>

            <div className="office-card">
        <img src={mainOffice.image} alt="Office" className="office-image" />
        <h2>{mainOffice.name}</h2>
        <p><strong>Rent:</strong> <span className={mainOffice.rent < 60000 ? 'low-rent' : 'high-rent'}>₹{mainOffice.rent}</span></p>
        <p><strong>Address:</strong> {mainOffice.address}</p>
      </div>

      <h2>More Office Spaces:</h2>
      {offices.map((office, index) => (
        <div key={index} className="office-card">
          <h3>{office.name}</h3>
          <p><strong>Rent:</strong> <span className={office.rent < 60000 ? 'low-rent' : 'high-rent'}>₹{office.rent}</span></p>
          <p><strong>Address:</strong> {office.address}</p>
        </div>
      ))}
    </div>
  );
};

export default OfficeSpaces;