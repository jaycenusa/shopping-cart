// take inputs from CardItem and create ItemList component to list multiple items
import CardItem from "./CardItem.jsx";
import PropTypes from "prop-types";

// the purpose of this component is to render a list of CardItem components
// it will take an array of items as a prop and map over them to create a CardItem for each

export default function CardList( {items, updateCart} ) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product) => (
                <CardItem key={product.id} item={product} updateCart={updateCart} />
            ))}
        </div>
  )
}

CardList.propTypes = {
    // Define prop types if any props are passed to CardList
    items: PropTypes.arrayOf(PropTypes.CardItem).isRequired,
};
