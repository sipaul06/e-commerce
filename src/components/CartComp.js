import React from 'react'
import { Table, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartComp = (props) => {
  return (
    <div >
    <Table hover>
    <tbody>
      <tr>
        <td>
            <img className="img-fluid" src={props.image_url} style={{ height : "7rem" }}></img>
            <p className="m-0">{props.product_name}</p>
            <p>Rp. {props.product_price}</p>
        </td>
        <td >
          <div className='row'>
          <Button className='col' onClick={props.onClickIncrement}>+</Button>
            <p className='col'>{props.qty}</p>
            <Button className='col' onClick={props.onClickDecrement}>-</Button>
          </div>
        </td>
        <td>
          <Button onClick={props.onClickDelete} className='ml-5'><FontAwesomeIcon icon={faTrash} /></Button>
          <p>Subtotal: Rp. {props.subtotal}</p>
        </td>
        </tr>
    </tbody>
  </Table>
  </div>
  )
}

export default CartComp