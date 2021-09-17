import React from "react"

import "./ProductItem.css"

const ProductItem = props => {
  return (
    <li className='product-item'>
      <h2>Title: {props.name}</h2>
      <p>Description: {props.description}</p>
      <p>Price: ${props.price}</p>
    </li>
  )
}

export default ProductItem
