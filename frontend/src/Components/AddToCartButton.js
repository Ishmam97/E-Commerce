import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function AddToCartButton(props) {
  const { pId } = props;
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // dispatch redux action addToCart when the count is greater than 0
  const dispatch = useDispatch()
  
  // dispatch addTocart redux action only when the add to cart button is clicked
  useEffect(() => {
    if (count > 0) {
      dispatch(addToCart(pId, count));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      dispatch(removeFromCart(pId));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  // if item exists in cartItems in local storage, set the count to the quantity of the item
  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    const item = cartItems.find((x) => x.pId === pId);
    if (item) {
      setCount(item.pQt);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAddToCart() {
    setCount(count + 1);
    addToCart(pId, count);
  }
  
  function handleRemoveFromCart() {
    setCount(count - 1);
    if (count === 0) {
      removeFromCart(pId);
    }
  }

  function handleDeleteFromCart() {
    setCount(0);
    removeFromCart(pId);
  }

  return (
    <div>
      {/* If the count is 0, render the "add to cart" button */}
      {count === 0 && (
        <button className='btn btn-sm btn-success' onClick={() => handleAddToCart()}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      )}
      {/* If the count is greater than 0, render the counter buttons */}
      {count > 0 && (
        <div className='d-flex'>
          <div>
            <button className='btn btn-sm btn-danger mx-2' onClick={() => handleRemoveFromCart()}>-</button>
            {count}
            <button className='btn btn-sm btn-success mx-2' onClick={() => handleAddToCart()}>+</button>
          </div>
          <div>
            <button className='btn btn-danger btn-sm mx-2' onClick={() => handleDeleteFromCart()}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCartButton;