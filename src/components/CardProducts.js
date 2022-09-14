import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const CardProducts = (props) => {
  return (
    <div className="col">
    <Card style={{ width: '18rem' }} className="justify-content-center border-0">
      <Card.Img variant="top" src={props.image_url}  style={{ height: '18rem' }} onClick={props.onClick} className="rounded"/>
      <Card.Body className="row d-flex">
        <div className="col">
        <Card.Title>{props.price}</Card.Title>
        <Card.Text>
          {props.name}
        </Card.Text>
        </div>
        <div className="col">
        <Button  variant="primary" onClick={props.onClick2}>Cart</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardProducts