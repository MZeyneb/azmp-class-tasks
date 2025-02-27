import React, { useState, useEffect } from 'react';
import getAllData from '../../../Data';
import { endpoints } from '../../../Data/constants';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigating
import "../Products/index.css";  
import { Helmet } from 'react-helmet-async';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");
  const navigate = useNavigate();  // Initialize navigate

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchVal.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const handleSearch = (e) => {
    setSearchVal(e.target.value.trim());
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const getProducts = async () => {
    try {
      const data = await getAllData(endpoints.products);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (productId) => {
    // Navigate to the edit page for the selected product
    navigate(`/Admin/Products/edit/${productId}`);
  };

  const handleDelete = (productId) => {
    // Filter out the product from the list (local delete)
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts); // Update state with new product list
    console.log("Product deleted:", productId);
    // You can add an API call here to delete the product from the backend
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin Products</title>
      </Helmet>
      <div className="container">
        <div className="products">
          <table className="product-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.length > 0 &&
                sortedProducts.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <img src={p.image} alt={p.title} width={50} />
                    </td>
                    <td>{p.title}</td>
                    <td>${p.price}</td>
                    <td>
                      <button className="action-btn" onClick={() => handleEdit(p.id)}>
                        Edit
                      </button>
                      <button className="action-btn" onClick={() => handleDelete(p.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
