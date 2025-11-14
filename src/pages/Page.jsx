import { useParams } from "react-router";
import HomePage from './HomePage.jsx';
import CartPage from './CartPage.jsx';
import Headers from '../components/Header.jsx';
import ShopPage from './ShopPage.jsx';

const Page = ({cart, updateCart, adjustQuantity}) => {
    const { page } = useParams();
    
    return (
      <>
        <div className="flex flex-col">
          <Headers cart={cart}/>
        </div>
        { page === 'shop' ? 
          <ShopPage updateCart={updateCart}/>: 
          page === 'cart' ?  
          <CartPage updateCart={updateCart} adjustQuantity={adjustQuantity}/> : 
          <HomePage /> }
      </>
    )
}

export default Page;