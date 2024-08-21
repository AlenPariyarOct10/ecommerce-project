import { Spin } from "antd";
import ProductSlider from "../components/ProductSlider";
import ProductsCardPrimary from "../components/Cards/ProductsCardPrimary";
import DashboardCategoryItems from "../components/Cards/DashboardCategoryItems";
import { useEffect, useState } from "react";
import https from "../../server/https";

const sellItemsObj = [
  {
    thumbnail : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    title : "T-shirt",
    price : "400",
    discount : "10",
    varient : "Black"
  },
  {
    thumbnail : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    title : "T-shirt",
    price : "500",
    discount : "50",
    varient : "White"
  },
  
  {
    thumbnail : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    title : "T-shirt",
    price : "300",
    discount : "0",
    varient : "Grey"
  }
  ,
  
  {
    thumbnail : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    title : "Test",
    price : "300",
    discount : "0",
    varient : "Grey"
  }
]

export default function Home() {
  


  document.title = "Home 🏠";
  return (
    <>
      <div className="mt-2">
        <ProductSlider />
         <DashboardCategoryItems title={"electronics"}/>
         <DashboardCategoryItems title={"watch"}/>
         
        
        
        
        
      </div>
    </>
  )
}
