import React, { useEffect, useState } from "react";
import CartComp from "../components/CartComp";
import axios from "axios";
import NavbarComp from "../components/NavbarComp";
import { Table, Button } from 'react-bootstrap'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MzgzMjYxODAsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJhZG1pbiJ9.AebFR-oQjUSOMez2ucDWkiMrS2eQIPmcYm5c71qZ_co';

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCarts = async () => {
    await axios
      .get("https://virtserver.swaggerhub.com/vizucode/E-Commerce/1.0.2/carts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCarts(response.data.data.products);
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
      {carts.map((item) => {
        return(
          <CartComp 
          image_url={item.image_url}
          product_name={item.product_name}
          product_price={item.product_price}
          qty={item.qty}
          subtotal={item.subtotal}
          onClickDelete={() => handleDeleteCart(item.cart_id)}/>
        );
      })}
      <div className="container">
      <Table >
      <tbody>
        <tr>
          <td>Total Order Product:</td>
          {/* <td>{total_order_product}</td> */}
        </tr>
        <tr>
          <td>Shipping:</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>Grand Total: </td>
          {/* <td>{grand_total}</td> */}
        </tr>
      </tbody>
    </Table>
    <Button>Order</Button>
      </div>
      
    </div>
  );
};

export default Cart;
