import React, { useEffect, useState } from "react";
import CartComp from "../components/CartComp";
import axios from "axios";
import NavbarComp from "../components/NavbarComp";
import { Table, Button } from 'react-bootstrap';
import '../components/style/ProductStyle.css';
import Footer from '../components/Footer'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MzgzMjYxODAsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJhZG1pbiJ9.AebFR-oQjUSOMez2ucDWkiMrS2eQIPmcYm5c71qZ_co';

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [cartstotal, setCartsTotal] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1)

  const getCarts = async () => {
    await axios
      .get("https://virtserver.swaggerhub.com/vizucode/E-Commerce/1.0.2/carts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCarts(response.data.data.products);
        setCartsTotal(response.data.data);
        // console.log(setCarts)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDeleteCart = (id) => {
    // console.log(id)
    
    axios
      .delete(`https://virtserver.swaggerhub.com/vizucode/E-Commerce/1.0.2/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response)
      })
      
      .catch((error) => {
        console.log(error);
      })
  }

 const incrementItem = (id) => {
  axios .put(`https://virtserver.swaggerhub.com/vizucode/E-Commerce/1.0.2/cart/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data : {
      "qty": `${setCount(count+1)}`
    },
  })
  .then((response) => {
    console.log(response)
  })
  
  .catch((error) => {
    console.log(error);
  })
   // setCount(count+1)
 }

 const decrementItem = (id) => {
  axios .put(`https://virtserver.swaggerhub.com/vizucode/E-Commerce/1.0.2/cart/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data : {
      "qty": `${setCount(count+1)}`
    },
  })
  .then((response) => {
    console.log(response)
  })
  
  .catch((error) => {
    console.log(error);
  })

//   if (count>0) {
//     setCount(count-1) 
//   }
//     else {
//       return (count=0)
//     }
 }




  useEffect(() => {
    getCarts();
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <div>
      <div>
        <NavbarComp/>
      </div>
      <div className="container p-5 ">
        <div className="row justify-content-center">
        <div  className='col-xl-8'>
      {carts.map((item) => {
        return(
          <CartComp 
          image_url={item.image_url}
          product_name={item.product_name}
          product_price={item.product_price}
          qty={item.qty}
          subtotal={item.subtotal}
          onClickDelete={() => handleDeleteCart(item.cart_id)}
          onClickIncrement={() => incrementItem(item.cart_id)}
          onClickDecrement={() => decrementItem(item.cart_id)}/>
        );
      })}
      </div>
      </div>
      </div>
      
      <div className="container pb-5">
        <div className="row justify-content-center">
        <div className="col-xl-6 ">
        <Table>
      <tbody>
        <tr>
          <td>Total Order Product:</td>
          <td >{cartstotal.total_order_product}</td>
        </tr>
        <tr>
          <td>Shipping:</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>Grand Total:</td>
          <td>Rp. {cartstotal.grand_total}</td>
        </tr>
      </tbody>
    </Table>
    <Button>Order</Button>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
