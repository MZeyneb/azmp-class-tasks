import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  
import getAllData from '../../../Data/index'; 
import { endpoints } from '../../../Data/constants';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const data = await getAllData(endpoints.products);
      const foundProduct = data.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
    } catch (error) {
      console.log(error);
    }
  };


  const handleSave = () => {
    console.log("Saving product...", product);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <>
          <h1>Edit Product</h1>
          <form>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={product.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Image URL</label>
              <input
                type="text"
                name="image"
                value={product.image}
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={handleSave}>Save</button>
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditProduct;
