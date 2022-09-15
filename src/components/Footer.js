import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './style/ProductStyle.css'

const Footer = () => {
  return (
    <div>
    <CardGroup style={{ height :'7 rem'}}>
      <Card className='border-0 darkblue'>
        <Card.Body>
        {/* <Navbar.Brand >O L S H O P</Navbar.Brand> */}
        <p>O L S H O P</p>
        </Card.Body>
      </Card>
      <Card className='border-0 darkblue'>
        <Card.Body className='p-5'>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='border-0 darkblue'>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Footer