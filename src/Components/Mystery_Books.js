import React, { useState, useEffect } from 'react';
import './Mystery.css';
import Modal1 from './Modal1';
import Mystery from './Mystery';

const MysteryBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    window.location.href = book.link;
  };

  const handleCloseModal = () => setSelectedBook(null);

  useEffect(() => {
    if (selectedBook === null) {
      // window.location.href = '/';
    }
  }, [selectedBook]);
  // No change needed in useEffect

  return (
    <div className="Mystery-Books">
      <>
        {Mystery.map((book) => (
          <div key={book.id} className="book" onClick={() => handleBookClick(book)}>
            <img src={book.imageUrl} alt={book.title} className="book-image" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => handleBookClick(book)}>READ MORE</button>
          </div>
        ))}
        {selectedBook && (
          <Modal1 show={true} item={selectedBook} onClose={handleCloseModal} />
        )}
      </>
    </div>
  );
};

export default MysteryBooks;