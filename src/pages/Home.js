import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "../components/NavbarComp";
import '../components/style/ProductStyle.css'
import Product from "../components/Product";


const Home = () => {
  
  return (
    <div className="container-fluid p-0">
      <div>
      <NavbarComp />
      </div>
      
      <div className="m-0">
        <img className="img-fluid p-5 mx-auto d-block" style={{ height: '35rem' }} src="https://img.freepik.com/premium-vector/online-shopping-banner-template-business-concept-sale-e-commerce_72460-168.jpg"/>
      </div>

      <div  style={{ height: '8rem' }} className="pink">
        <p>Top Categories</p>
      </div>
      <div>
        <Product/>
      </div>

      
    </div>
  );
};

export default Home;
