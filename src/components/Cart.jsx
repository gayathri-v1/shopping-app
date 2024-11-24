import { useEffect, useState, useContext } from "react";
import { cartContext } from "../App";
import '../style/cart.css'


const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(cartContext);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  return (
    <>
      <h2>Shopping cart</h2>
      <div className="cartContainer">
        {cart.length === 0 ? (
          <p>Your cart is empty :-|</p>
        ) : (
          cart.map((product) => (
            <div className="cartProduct" key={product.id}>
              <div>
                <img
                  className="cartImage"
                  alt={product.title}
                  src={product.image}
                  width={100}
                  height={120}
                />
              </div>
              <div>
                <h4>{product.title}</h4>
                <p>Price:{product.price}</p>
                <p>Quantity:{product.quantity}</p>
                <button className="removeCart" onClick={() => removeFromCart(product.id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div>
          <h2>Total Price: {total.toFixed(2)}</h2>
          <button className="pay">Proceed and Pay</button>
        </div>
      )}
    </>
  );
};

export default Cart;
