"use client";

import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Tooltip } from "@mui/material";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>

      {loading ? (
        <div className="flex justify-center items-center h-96">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow p-4 flex flex-col justify-between h-full"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 object-contain mb-4 mx-auto"
                />
              )}
              <Tooltip title={item?.title} placement="top">
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                  textAlign: "center",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                title={item.title}
              >
                {item.title?.length >= 30
                  ? `${item.title.slice(0, 30)}...`
                  : item.title}
              </Typography>
              </Tooltip>
              <Typography
                variant="body2"
                className="text-gray-500 text-center mb-2"
              >
                {item.category}
              </Typography>
              <Typography
                variant="h6"
                className="font-bold text-xl text-center mb-4"
              >
                ${item.price}
              </Typography>
              <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
