import React, { useState, useEffect } from 'react';
import getAllData from '../../../Data';
import { endpoints } from '../../../Data/constants';
import "../Products/index.css";
import { FaHeart } from "react-icons/fa";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const [sortOption, setSortOption] = useState("price-asc"); 
    
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

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container">
            <div className="ads">
                <div className="ip">
                    <input type="text" placeholder='Search...' onChange={handleSearch} />
                </div>

                <div className="srt">

                    <div className="sort-container">
                        <label htmlFor="sort-by" className="sort-label">Sort by:</label>
                        <select
                            id="sort-by"
                            className="sort-select"
                            value={sortOption} 
                            onChange={handleSortChange} 
                        >
                            <option value="price-asc">Price ASC</option>
                            <option value="price-desc">Price DESC</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='products'>
                {sortedProducts.length > 0 && sortedProducts.map((p) => {
                    return (
                        <div className="card" key={p.id}>
                            <div className="ic">
                                <FaHeart />
                            </div>
                            <img src={p.image} alt="" width={100} />
                            <h1>{p.title}</h1>
                            <p>${p.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
