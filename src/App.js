import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import React,{useState} from 'react'
import CartModal from "./components/CartModal";
import CartProvider from "./context/CartContext";



function App() {
  const[isCartOpen,setIsCartopen]=useState(false)
   const toggleCart=()=>{
    setIsCartopen(!isCartOpen)
   }

  return (
    <div>
      <CartProvider>
       
        <ProductForm/>
        <ProductList/>
        <button onClick={toggleCart}>Cart</button>
        {isCartOpen && <CartModal onClose={toggleCart} />}
      
      </CartProvider>
    </div>
  );
}

export default App;
 