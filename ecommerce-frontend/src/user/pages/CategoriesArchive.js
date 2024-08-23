import React, { useState, useEffect } from "react";
import https from "../../server/https";
import { useParams } from "react-router-dom";
import ProductsCardPrimary from "../components/Cards/ProductsCardPrimary";
import { Spin } from "antd";

const CategoriesArchive = () => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {slug} = useParams();

  useEffect(() => {
    // Fetch category data based on the slug
    https
      .get(`/categories/${slug}`)
      .then((response) => {
    
        setCategory(response.data);
      
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching category");
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="h-full w-full flex flex-row align-middle justify-center">
        <Spin size="large" />
    </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    (category.length>0)?<ProductsCardPrimary title={slug.toUpperCase()+" PRODUCTS"} list={category}/>:<ProductsCardPrimary title={slug.toUpperCase()+" Not Available"} list={category}/>
  );
};

export default CategoriesArchive;
