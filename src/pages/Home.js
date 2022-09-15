import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "../components/NavbarComp";
import '../components/style/ProductStyle.css'
import Product from "../components/Product";
import Footer from "../components/Footer";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faBowlFood, faShirt, faHandSparkles, faChair, faHeadset, faMobile, faLaptop } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  
  return (
    <div className="container-fluid p-0">
      <div>
      <NavbarComp />
      </div>
      
      {/* <div className="m-0">
        <img className="img-fluid p-5 mx-auto d-block" style={{ height: '35rem' }} src="https://img.freepik.com/premium-vector/online-shopping-banner-template-business-concept-sale-e-commerce_72460-168.jpg"/>
      </div> */}

      <div  style={{ height: '6rem' }} className="pink row">
        {/* <div className='start-50'><p>Top Categories</p></div> */}
        <div className="col pt-3"><FontAwesomeIcon icon={faChair} size="2x"/><p>Rumah Tangga</p></div>
        <div className="col pt-3"><FontAwesomeIcon icon={faCar} size="2x"/><p>Kendaraan</p></div>
        <div className="col pt-3"><FontAwesomeIcon icon={faHandSparkles} size="2x"/><p>Kecantikan</p></div>
        <div className="col pt-3"><FontAwesomeIcon icon={faBowlFood} size="2x"/><p>Makanan</p></div>
        <div className="col pt-3"><FontAwesomeIcon icon={faShirt} size="2x"/><p>Fashion</p></div>
        <div className="col pt-3"><FontAwesomeIcon icon={faHeadset} size="2x"/><p>Headset</p></div>
        <div className="col pt-3"><FontAwesomeIcon icon={faMobile} size="2x"/><p>Mobil</p></div>
        <div className="col pt-3"><FontAwesomeIcon icon={faLaptop} size="2x"/><p>Laptop</p></div>
      </div>

      <div>
        <Product/>
      </div>
     <div>
      <Footer/>
     </div>
    </div>
  );
};

export default Home;
