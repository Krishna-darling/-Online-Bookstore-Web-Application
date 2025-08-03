import React, { useState } from "react";
import BookCard from "./BookCard";
import BookModal from "./BookModal";
import booksData from "./books";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("title");
  const [booksPerPage, setBooksPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const addToCart = (book) => setCart([...cart, book]);

  const totalPrice = cart.reduce((total, b) => total + parseFloat(b.price), 0).toFixed(2);

  const filteredBooks = booksData
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((book) => selectedCategory === "All" || book.category === selectedCategory)
    .sort((a, b) => {
      if (sortOption === "title") return a.title.localeCompare(b.title);
      if (sortOption === "price") return parseFloat(a.price) - parseFloat(b.price);
      if (sortOption === "rating") return b.rating - a.rating;
      return 0;
    });

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = booksPerPage === "All" ? filteredBooks : filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = booksPerPage === "All" ? 1 : Math.ceil(filteredBooks.length / booksPerPage);

  const categories = ["All", ...new Set(booksData.map((book) => book.category))];

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <header className="header">
        <h1>📚 Online Bookstore</h1>
        <div className="toggle-container">
          <label>🌙 Dark Mode</label>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        </div>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="title">Sort by Title</option>
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
        <select onChange={(e) => setBooksPerPage(e.target.value)} value={booksPerPage}>
          <option value={3}>3 per page</option>
          <option value={6}>6 per page</option>
          <option value={9}>9 per page</option>
          <option value="All">All Books</option>
        </select>
      </div>

      <div className="book-grid">
        {currentBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => setSelectedBook(book)}
            onAddToCart={() => addToCart(book)}
            darkMode={darkMode}
          />
        ))}
      </div>

      <div className="pagination">
        {booksPerPage !== "All" &&
          Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              className={currentPage === idx + 1 ? "active" : ""}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
      </div>

      <div className="cart-summary">
        <h2>🛒 Cart ({cart.length} items)</h2>
        <p>Total: ₹{totalPrice}</p>
      </div>

      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onAddToCart={addToCart}
          darkMode={darkMode}
        />
      )}

      <footer className="footer">© {new Date().getFullYear()} Online Bookstore. All rights reserved.</footer>
    </div>
  );
}

export default App;
