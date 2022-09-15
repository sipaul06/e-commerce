import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import CardProducts from "./CardProducts";
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MzgzMjYxODAsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJhZG1pbiJ9.AebFR-oQjUSOMez2ucDWkiMrS2eQIPmcYm5c71qZ_co';

const Product = () => {

    const navigate = useNavigate();
    

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState([])

  const getProducts = async () => {
    await axios
      .get(
        "https://virtserver.swaggerhub.com/vizucode/E-Commerce/1.0.2/products"
      )
      .then((response) => {
        setProducts(response.data.data);
        setPage(response.data)
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
        description: item.description, 
      },
    });
  };

  const handlePostCart = async (data) => {
    await axios
      .post("https://virtserver.swaggerhub.com/vizucode/E-Commerce/1.0.2/carts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data : {
            "product_id": `${data.id}`
          }
        })
      
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
      navigate("/carts");
  };
    
  

  useEffect(() => {
    getProducts();
    handlePostCart();
  }, []);


  return (
    <div>
        <div className="container-fluid">
        <div className="row justify-content-around d-flex p-5">
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
        {/* <div className="container ">
          <div className='row d-flex'>
          <Button className='col btn-light'>Previous</Button>
          <div className='col align-item-center'><p>{page.current_page}</p></div>
          <Button className='col btn-light'>Next</Button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Product