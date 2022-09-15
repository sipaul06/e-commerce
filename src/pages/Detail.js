import React from 'react'
import { useLocation } from 'react-router-dom'
import NavbarComp from '../components/NavbarComp'
import {Table, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/style/ProductStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Detail = () => {
  const location = useLocation();

  return (
    <div>
      <div>
        <NavbarComp/>
      </div>
      <div className='container'>
      <div className="row d-flex pt-5">
      <div className="col-lg-5 col-10 d-grid gap-2">
        <img src={location.state.image_url} className="img-fluid"/>
        <p>Stock: {location.state.stock}</p>
        <Button size="lg"><FontAwesomeIcon icon={faCartShopping} /></Button>
      </div>
      <div className="col-lg-5 col-10">
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
    </div>
  )
}

export default Detail