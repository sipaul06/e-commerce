import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './style/ProductStyle.css'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
    <CardGroup style={{ height :'7 rem'}}>
      <Card className='border-0 darkblue'>
        <Card.Body >
          <div className="row justify-content-start py-5 ">
          <div className="col-lg-1 col-2 darkpink"><FontAwesomeIcon icon={faBasketShopping} size="lg"/></div>
        <div className="col-lg-3 col-8 darkpink"><p>O L S H O P</p></div>
          </div>
        
        </Card.Body>
      </Card>
      <Card className='border-0 darkblue'>
        <Card.Body className='py-4'>
          <Card.Text>
            Contact Us
          </Card.Text>
          <FontAwesomeIcon className='p-2' icon={faTwitter} size="3x"/>
          <FontAwesomeIcon className='p-2' icon={faInstagram} size="3x"/>
          <FontAwesomeIcon className='p-2' icon={faWhatsapp} size="3x"/>
          <FontAwesomeIcon className='p-2' icon={faFacebook} size="3x"/>
          <div></div>
        </Card.Body>
      </Card>
      <Card className='border-0 darkblue'>
        <Card.Body>
          <Card.Text>Help</Card.Text>
          <div >
          <p className='m-0'>Persyaratan & Ketentuan</p>
          <p className='m-0'>Kebijakan Privasi</p>
          <p className='m-0'>Responsible Disclosure</p>
          <p className='m-0'>Affiliate Marketing</p>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Footer