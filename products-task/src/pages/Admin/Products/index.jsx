import React, { useState, useEffect } from 'react';
import getAllData from '../../../Data';
import { endpoints } from '../../../Data/constants';
import { useNavigate } from 'react-router-dom'; 
import "../Products/index.css";  
import { Helmet } from 'react-helmet-async';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();  




  const getProducts = async () => {
    try {
      const data = await getAllData(endpoints.products);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (productId) => {
    navigate(`/admin/EditProduct/${productId}`);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts); 

  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Products</title>
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
              {products.length > 0 &&
                products
                .map((p) => (
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
