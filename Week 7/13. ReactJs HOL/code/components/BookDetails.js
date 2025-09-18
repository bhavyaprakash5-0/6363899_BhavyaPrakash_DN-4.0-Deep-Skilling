import React from 'react';

const BookDetails = () => {
  const books = [
    { title: 'Master React', price: 670 },
    { title: 'Deep Dive into Angular 11', price: 800 },
    { title: 'Mongo Essentials', price: 450 },
  ];

  return (
    <div className="column bordered">
      <h2>Book Details</h2>
      {books.map((book, idx) => (
        <div key={idx}>
          <h3>{book.title}</h3>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
