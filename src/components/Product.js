import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardProducts from "./CardProducts";
// import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {

    const navigate = useNavigate();
    // const location = useLocation()
    const [products, setProducts] = useState([]);
    // const [postcart, setPostCart] = useState([])
    // const [filter, setFilter] = useState('');

  const getProducts = async () => {
    await axios
      .get(
        "https://virtserver.swaggerhub.com/vizucode/E-Commerce/1.0.2/products"
      )
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickDetail = (item) => {
    console.log(item.id);
    navigate(`/product/${item.id}`, {
      state: {
        image_url: item.image_url,
        name: item.name,
        price: item.price,
        category_name: item.category_name,
        stock: item.stock,
        description: item.description 
      },
    });
  };

  const handlePostCart = async () => {
    await axios
      .post(
        "https://virtserver.swaggerhub.com/vizucode/E-Commerce/1.0.2/carts"
      )
      .then((response) => {
        // handlePostCart(response.data.data);
        // postcart.push(item);
        console.log("coba:", response)
      })
      .catch((error) => {
        console.log(error);
      });
  };
    
    // console.log(postcart);
  

  useEffect(() => {
    getProducts();
    handlePostCart();
  }, []);

// const filterProduct = (cat) => {
//     const updatedList = products.filter((x) => x.category_name === cat);
//     setFilter(updatedList)
// }

  return (
    <div>
        <div className="container-fluid">
        <div className="row justify-content-around d-flex">
            {/* <Button onClick={() => setFilter(products)}>All</Button>
            <Button onClick={() => filterProduct("Television")}>Television</Button>
            <Button onClick={() => filterProduct("laptop")}>laptop</Button> */}
          {products.map((item) => {
            return (
              <CardProducts
                image_url={item.image_url}
                name={item.name}
                price={item.price}
                onClick={() => handleClickDetail(item)}
                onClick2={() => handlePostCart(item)}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Product