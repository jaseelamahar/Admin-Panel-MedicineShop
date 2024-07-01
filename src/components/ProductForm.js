import React, { useState } from 'react'
import "./ProductForm.css"

const ProductForm = () => {

  const[name,setName]=useState('')
  const[desc,setDesc]=useState('')
  const[price,setPrice]=useState('')
  const[quantity,setQuantity]=useState(1)

  const handleSubmit=(e)=>{
    e.preventDefault();
    addProduct({name,desc,price:parseFloat(price),quantity})
    setName("");
    setDesc('');
    setPrice('')
    setQuantity(1)
  }

  return (
    <form className='products' onSubmit={handleSubmit}>
    <div className='product'>
        <label>Medicine Name:</label>
        <input type='text' id='medicinename'  value={name} onChange={(e)=>setName(e.target.value)}></input>
        <label>Description:</label>
        <input type='text' id='desc'  value={desc} onChange={(e)=>setDesc(e.target.value)} ></input>
        <label>Price:</label>
        <input type='number' id='price' value={price} onChange={(e)=>setPrice(e.target.value)}></input>
        <label>QuantityAvailable</label>
        <input type='number' id='quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input>
        <button type='submit' >AddProduct</button>
      
    </div>
    </form>
  )
}

export default ProductForm
