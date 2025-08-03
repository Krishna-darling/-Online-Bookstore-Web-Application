// src/components/BookModal.js
import React from "react";
import "./BookModal.css"; // Optional if you separate modal styles

const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img
          src={book.image}
          alt={book.title}
          className="modal-book-image"
        />
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Price:</strong> ${parseFloat(book.price).toFixed(2)}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      </div>
    </div>
  );
};

export default BookModal;
