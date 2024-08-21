import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./user/layouts/HomeLayout";
import AdminLayout from "./admin/layout/AdminLayout";
import NoPage from "./user/pages/NoPage";
import { Spin } from "antd";

import CreateProducts from "./admin/pages/products/CreateProducts";
import ListProducts from "./admin/pages/products/ListProducts";

import CategoriesArchive from "./user/pages/CategoriesArchive";
import DashboardCategoryItems from "./user/components/Cards/DashboardCategoryItems";



// Lazy load the components
const Home = React.lazy(() => import("./user/pages/Home"));
const Categories = React.lazy(() => import("./user/pages/Categories"));
const Hotproducts = React.lazy(() => import("./user/pages/Hotproducts"));
const SingleProduct = React.lazy(() => import("./user/pages/SingleProduct"));
const Cart = React.lazy(() => import("./user/pages/Cart"));
const UserLogin = React.lazy(() => import("./user/pages/auth/UserLogin"));

// Admin Pages
const Dashboard = React.lazy(() => import("./admin/pages/Dashboard"));
const ListCategories = React.lazy(() => import("./admin/pages/categories/ListCategories"));
const CreateCategories = React.lazy(() => import("./admin/pages/categories/CreateCategories"));



function Page({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route
            path="categories"
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }><ListCategories /></Suspense>
              
            }
          />
          <Route
            path="categories/create"
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }><CreateCategories /></Suspense>
              
            }
          />
          
          <Route
            path="products"
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }><ListProducts /></Suspense>
              
            }
          />
          <Route
            path="products/create"
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }><CreateProducts /></Suspense>
              
            }
          />
          <Route
            path="*"
            element={
              <NoPage />
            }
          />
          
        </Route>

        <Route path="/" element={<HomeLayout />}>
          <Route
            index
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="categories"
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }>
                <Categories />
              </Suspense>
            }
          />
        
          <Route
            path="categories/:slug"
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }><CategoriesArchive/></Suspense>
              
            }
          />
          <Route
            path="hotproducts"
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }>
                <Hotproducts />
              </Suspense>
            }
          />
          <Route
            path="product"
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }>
                <SingleProduct />
              </Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                  <Spin size="large" />
                </div>
              }>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <NoPage />
            }
          />
        </Route>
        <Route path="/auth" >
          <Route
            path="login"
            element={
              <UserLogin />
            }
          />
          <Route
            path="*"
            element={
              <NoPage />
            }
          />
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
