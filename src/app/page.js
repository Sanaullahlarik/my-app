"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import Image from "next/image";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        console.log(data, "dataValue");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border rounded-lg shadow p-4 flex flex-col">
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="h-40 object-contain mb-4"
              />
            )}
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-500 mb-2">{item.category}</p>
            <p className="font-bold text-xl mb-4">${item.price}</p>
            <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
