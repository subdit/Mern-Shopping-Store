import React, { useState } from "react"

import Input from "../Input/Input"
import Button from "../Button/Button"
import "./NewProduct.css"

const NewProduct = props => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredDescription, setEnteredDescription] = useState("")
  const [enteredPrice, setEnteredPrice] = useState("")

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value)
  }
  const descriptionChangeHandler = event => {
    setEnteredDescription(event.target.value)
  }

  const priceChangeHandler = event => {
    setEnteredPrice(event.target.value)
  }

  const submitProductHandler = event => {
    event.preventDefault()
    props.onAddProduct(enteredTitle, enteredPrice)
  }

  return (
    <section id='new-product'>
      <h1>Add a New Product</h1>
      <form onSubmit={submitProductHandler}>
        <Input
          type='text'
          label='Title'
          id='title'
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <Input
          type='text'
          label='Description'
          id='description'
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
        <Input
          type='number'
          label='Price'
          step={0.01}
          id='price'
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <Button type='submit'>ADD PRODUCT</Button>
      </form>
    </section>
  )
}

export default NewProduct
