import React, { useState, useEffect } from "react";
import axios from "axios";

const api = "https://fakestoreapi.com/products";
const List = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(api);
        const data = response.data;
        setProducts(data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filterData);
  }, [search, products]);

  return (
    <div className="listSearch">
      <input id="search"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.map((product) => (
          <div className="unique">
            <h3 id="title">{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              id="img"
              width="300px"
              height="350px"
            />
            <h2 id="price">Rs.{product.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
