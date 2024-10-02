import React from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Main from "./components/Layout/Main";
import Product from "./components/Layout/Product";

export default function App() {
  return (
    <div className="font-sans h-[300vh] overflow-x-hidden   ">
      <Main/>
      <Product/>
      <Footer/>
    </div>
  );
}
