import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import NoPage from "./pages/NoPage";
import { Spin } from "antd";

// Lazy load the components
const Home = React.lazy(() => import("./pages/Home"));
const Categories = React.lazy(() => import("./pages/Categories"));
const Hotproducts = React.lazy(() => import("./pages/Hotproducts"));
const SingleProduct = React.lazy(() => import("./pages/SingleProduct"));
const Cart = React.lazy(() => import("./pages/Cart"));
const UserLogin = React.lazy(() => import("./pages/auth/UserLogin"));

// Higher-order component for setting page title
function Page({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

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
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
