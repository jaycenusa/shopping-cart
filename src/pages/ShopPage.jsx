import APIService from '../services/APIService';
import ErrorPage from './ErrorPage';
import CardList from '../components/CardList.jsx';

export default function ShopPage({updateCart}) {

    // Using the APIService to fetch products (not displayed in this snippet)
    const { products, loading, error } = APIService();

    if(loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading products...</p>
                    </div>
            </div>
        )
    }
    else if(error) {
        return (
            <ErrorPage />
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-10">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                    Our Products
                </h1>
                <p className="text-gray-600">
                    Browse our collection of {products.length} items
                </p>
                </div>

                <CardList items={products} updateCart={updateCart}/>
            </div>
    </div>    
    )
}