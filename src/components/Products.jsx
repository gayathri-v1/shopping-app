import { useEffect, useState,useContext } from "react"
import '../style/products.css'
import { cartContext } from "../App";
const Products = () => {
  const { cart, setCart } = useContext(cartContext)
  const [products,setProducts] = useState([]);

useEffect(()=>{
 const fetchProducts= async()=>{
    const url= "https://fakestoreapi.com/products";

    try{
      const response= await fetch(url);
      const productInfo= await response.json();
      setProducts(productInfo);
      

    }
    catch(error){
      console.log("Failed to fetch products ",error);
    }
 }
 fetchProducts();
},[]);

const addToCart=(product, quantity)=>{
  const existingProduct = cart.find((item) => item.id === product.id);
  if(existingProduct){
    setCart(
      cart.map((item)=>
        item.id===product.id
      ?{...item,quantity: item.quantity + quantity}
        :item
      )
    );
  }
  else{
    setCart([...cart,{ ...product, quantity }]);
  }
}
// 

  return (
    
    <div className="productContainer">
      {products.map((product)=>(
        <div className="product" key={product.id}>
          <img src={product.image} width={200} height={250} alt={product.title}></img>
          <h3>{product.title}</h3>

          <p>${product.price.toFixed(2)}</p>
          <div className="innerDiv">
          <input
            type="number"
            defaultValue={1}
            min={1}
            // max={10}
            style={{ width: "50px" }}
            id={`quantity-${product.id}`}
          />

          
          <button className="addToCart"
             onClick={()=>{
              const quantity= parseInt(document.getElementById(`quantity-${product.id}`).value,
              10);
               addToCart(product,quantity)
             }
             }
           > Add To Cart</button>
          </div>
        </div>
      ))}
      
    </div>
    
  )
}

export default Products
