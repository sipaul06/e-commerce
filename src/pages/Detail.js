import React from 'react'
import { useLocation } from 'react-router-dom'
import NavbarComp from '../components/NavbarComp'
import {Table, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/style/ProductStyle.css'

const Detail = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        <NavbarComp/>
      </div>
      <div className="row d-flex">
      <div className="col d-grid gap-2">
        <img src={location.state.image_url} className="img-fluid"/>
        <p>Stock: {location.state.stock}</p>
        <Button size="lg">Cart</Button>
      </div>
      <div className="col">
      <Table>
      <tbody>
        <tr>
          <td>{location.state.name}</td>
        </tr>
        <tr>
          <td>Rp. {location.state.price}</td>
        </tr>
        <tr>
          <td>Category: {location.state.category_name}</td>
        </tr>
        <tr>
          <td>Description: {location.state.description}</td>
        </tr>
      </tbody>
    </Table>
      </div>
      </div>
      
    </div>
  )
}

export default Detail