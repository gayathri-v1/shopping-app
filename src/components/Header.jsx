import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import '../style/header.css'
import { useContext } from "react";
import { cartContext } from "../App";


const Header = () => {
  const { cart } = useContext(cartContext);

  return (
    <div className="navBar">
        <div className="logo">Shoppers Start $$</div>
        <ul>
            <li>
                <Link to={"/"}>Home
                </Link>
            </li>
            <li>
                <Link to={"/Products"}>Products</Link>
                
            </li>
            <li>
                <Link to={"Cart"}>
                <div><FaShoppingCart size={24} style={{ color: 'white' }} /> 
                <span>{cart.length}</span>
                </div>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header
