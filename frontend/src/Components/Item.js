import React , { useState } from "react";
import "./css/item.css";
import { Link } from "react-router-dom";

function Item({id , img , name , price , qt , cat, desc}) {
  const [state, setState] = useState(() => {
    // Read from user's wishlist to check if this item was added earlier
    return 0;
  });

  // const [cartState, setCartState] = useState(() => {
  //   return 0;
  // });

  function addToCart(e) {
    console.log("Product added.");

  //   if (cartState === 0) {
  //     setCartState((cartState) => 1);
  //   }
  }
  
  function likedProduct(e) {
    if (state === 0) {
      setState((state) => 1);
      console.log("Product added to wishlist.");
      e.target.src = "../img/heart.png";
    } else {
      setState((state) => 0);
      console.log("Product removed from wishlist.");
      e.target.src = "../img/unheart.png";
    }
  }

  return (
    <div className="pCard m-3">
      <div className="imgbox">        
        <img className='img-fluid pImg' src={`http://localhost:9001/uploads/${img}`} alt={`${id}_${name}_${cat}_${desc}`}></img>
      </div>
      <div className="cardBody">
        <h5>{name}</h5>
        <h4 className="price">${price}</h4>

        {/* <div className="counterBlock">
          <button id="minus"> - </button>
          <p id="number"> 0 </p>
          <button id="plus"> + </button>
        </div> */}
        <button
          className="cart"
          onClick={(e) => {
            addToCart(e)
            console.log(e.target);
          }}
        >
          {" "}
          Add to Cart
        </button>

        <Link
          className="heart"
          to="#"
          onClick={(e) => {
            likedProduct(e);
          }}
        >
          {" "}
          <img
            src="../img/unheart.png"
            alt="like button"
            height="32px"
            width="32px"
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default Item;
