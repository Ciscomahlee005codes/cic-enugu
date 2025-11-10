import React, { useState } from "react";
import "./SchoolOutfits.css";

interface Outfit {
  id: number;
  name: string;
  price: number;
  img: string;
  sizes: string[];
}

const outfitsList: Outfit[] = [
  { id: 1, name: "School Shirt", price: 2500, img: "https://via.placeholder.com/120", sizes: ["S", "M", "L"] },
  { id: 2, name: "School Trousers", price: 3000, img: "https://via.placeholder.com/120", sizes: ["28", "30", "32"] },
  { id: 3, name: "School Tie", price: 800, img: "https://via.placeholder.com/120", sizes: ["One Size"] },
  { id: 4, name: "School Shoes", price: 4500, img: "https://via.placeholder.com/120", sizes: ["38", "39", "40"] },
];

const SchoolOutfits: React.FC = () => {
  const [cart, setCart] = useState<Outfit[]>([]);
  const [search, setSearch] = useState("");

  const addToCart = (item: Outfit) => {
    setCart([...cart, item]);
  };

  const filteredOutfits = outfitsList.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="outfits-container">
      <h2>School Outfits 👕</h2>

      <input
        type="text"
        placeholder="Search outfits..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="outfits-grid">
        {filteredOutfits.map(item => (
          <div className="outfit-card" key={item.id}>
            <img src={item.img} alt={item.name} className="outfit-img"/>
            <h3>{item.name}</h3>
            <p>Price: ₦{item.price.toLocaleString()}</p>
            <p>Sizes: {item.sizes.join(", ")}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Cart ({cart.length} items)</h3>
        <p>Total: ₦{cart.reduce((acc, item) => acc + item.price, 0).toLocaleString()}</p>
        <button disabled={cart.length === 0}>Checkout</button>
      </div>
    </div>
  );
};

export default SchoolOutfits;
