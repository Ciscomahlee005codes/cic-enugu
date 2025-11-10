import React, { useState } from "react";
import "./Bookshop.css";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
}

const bookList: Book[] = [
  { id: 1, title: "Mathematics 101", author: "J. Doe", price: 2500, img: "https://via.placeholder.com/120" },
  { id: 2, title: "English Grammar", author: "A. Smith", price: 1800, img: "https://via.placeholder.com/120" },
  { id: 3, title: "Basic Science", author: "M. Johnson", price: 2000, img: "https://via.placeholder.com/120" },
  { id: 4, title: "History & Civics", author: "R. Lee", price: 2200, img: "https://via.placeholder.com/120" },
  // Add more books here
];

const Bookshop: React.FC = () => {
  const [cart, setCart] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  const addToCart = (book: Book) => {
    setCart([...cart, book]);
  };

  const filteredBooks = bookList.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bookshop-container">
      <h2>School Bookshop 📚</h2>

      <input
        type="text"
        placeholder="Search books..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="book-grid">
        {filteredBooks.map(book => (
          <div className="book-card" key={book.id}>
            <img src={book.img} alt={book.title} className="book-img"/>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>₦{book.price.toLocaleString()}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Cart ({cart.length} items)</h3>
        <p>Total: ₦{cart.reduce((acc, book) => acc + book.price, 0).toLocaleString()}</p>
        <button disabled={cart.length === 0}>Checkout</button>
      </div>
    </div>
  );
};

export default Bookshop;
