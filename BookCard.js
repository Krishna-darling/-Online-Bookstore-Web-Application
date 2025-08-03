import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onClick, onAddToCart }) => {
  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    if (halfStar) {
      stars.push(<span key="half">⭐</span>);
    }

    return stars;
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">by {book.author}</p>
      <p className="book-category">{book.category}</p>
      <p className="book-price">{book.price}</p>
      <div className="book-rating">{renderStars(book.rating)}</div>
      <div className="card-buttons">
        <button onClick={onClick}>View Details</button>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default BookCard;
