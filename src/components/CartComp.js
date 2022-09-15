import React from 'react'
import { Table } from 'react-bootstrap'

const CartComp = (props) => {
  return (
    <div className="container">
        <Table hover>
    <tbody>
      <tr>
        <td>
            <img className="img-fluid" src={props.image_url}></img>
            <p>{props.product_name}</p>
            <p>{props.product_price}</p>
        </td>
        <td>
            <button>+</button>
            <p>{props.qty}</p>
            <button>-</button>
        </td>
        <td>{props.subtotal}</td>
        <td><button onClick={props.onClickDelete}>Delete</button></td>
        </tr>
    </tbody>
  </Table>
  </div>
  )
}

export default CartComp