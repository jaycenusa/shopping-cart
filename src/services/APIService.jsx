// making an API call to fetch products from FakeStoreAPI using useEffect
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const APIService = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const massageData = data.map(item => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    category: item.category,
                    price: item.price,
                    quantity: item.rating.count,
                    image: item.image,
                }));

                setProducts(massageData);
                setError(null);
            }
            catch (error) {
                setError(error.message);
                setProducts([]);
            }
            finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);
    
    return { products, loading, error };
}

APIService.propTypes = {
    // Define prop types if any props are passed to APIService
    items: PropTypes.arrayOf(PropTypes.CardItem).isRequired,
};

export default APIService;