import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CardProducts = (props) => {
  return (
    <div className="col p-2">
    <Card style={{ width: '18rem' }} className="justify-content-center border-0">
      <Card.Img variant="top" src={props.image_url}  style={{ height: '23rem' }} onClick={props.onClick} className="rounded"/>
      <Card.Body className="row d-flex">
        <div className="col">
        <Card.Title>Rp. {props.price}</Card.Title>
        <Card.Text>
          {props.name}
        </Card.Text>
        </div>
        <div className="col">
        <Button  variant="primary" onClick={props.onClick2}><FontAwesomeIcon icon={faCartShopping} /></Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardProducts