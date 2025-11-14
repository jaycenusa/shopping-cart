import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Headers = ({cart}) => {
    const size = cart && Array.isArray(cart) ? cart.reduce((accum, curr) => {
        return accum + (curr.quantity || curr.qty || 0);
    }, 0) : 0;

    return (
    <>
        <div className="border-b bg-blue-700 sticky top-0 z-10 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-8">
                <Link to="/" className="text-gray-900 hover:text-gray-600 text-3xl transition-colors">
                    Home
                </Link>
                <Link to="/shop" className="text-gray-900 hover:text-gray-600 text-3xl transition-colors">
                    Shop
                </Link>
            </div>

            <Link to="/cart" className="relative">
                <ShoppingCart size={36} className="text-gray-900 hover:text-gray-600 transition-colors" />
                {size != 0 && <p className="absolute -top-2 -right-2 bg-[#FF1F4A] w-6 h-6 p-2 flex justify-center items-center font-medium rounded-full">{size}</p>}
                <span className="text-gray-900 hover:text-gray-600 text-3xl transition-colors">
                    Cart
                </span>
            </Link>
            </div>
        </div>
    </>
    )
}

export default Headers;