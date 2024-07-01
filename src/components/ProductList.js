import "./ProductList.css"
import React, { useContext } from "react";
import  CartContext  from "../context/CartContext";

const ProductList = () => {
    const { products, addToCart, setProducts } = useContext(CartContext);
    
    const handlequantity=(index,value)=>{
        const updatedProducts=[...products];
        updatedProducts[index].quantity=parseInt(value)
        setProducts(updatedProducts)
    }
  return (
    <div>
        <h2>Productlist</h2>
        <ul className='productlist'>
            {ProductList.map((product,index)=>(
                
                <li key={index} >
                    <div>
                    <h3>{product.name}</h3>
                    <p>
                        {product.desc}|Price:${product.price}|quantity:
                        <input 
                                    type="number" 
                                    value={product.quantity} 
                                    onChange={(e) => handlequantity(index, e.target.value)} 
                                />
                    </p>
                    </div>
                 <button onClick={()=>addToCart(product)}>AddToCart</button>
                    
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default ProductList
