import React, {useState} from 'react';
import "./css/item.css";
import {Link} from 'react-router-dom'
function Item() {
  
  const Line = ({ color }) => (
    <hr 
      style = {{
        color: color,
        backgroundColor: color,
        height: 0.2
      }}
    />
  );
  
  const [state, setState] = useState(() => {
    // Read from user's wishlist to check if this item was added earlier
    return 0
  })
  
  const [cartState, setCartState] = useState(() => {
    return 0
  })

  function addToCart(e) {
    console.log("Product added.");
    
    if(cartState === 0) {
      setCartState(cartState => 1)
      
    }
    

    
    


  }
  
  function likedProduct(e){
    if(state === 0) {
      setState(state => 1)
      console.log("Product added to wishlist.");
      e.target.src = "../img/heart.png"
      
    }
    else {
      setState(state => 0)
      console.log("Product removed from wishlist.");
      e.target.src = "../img/unheart.png"
    }
  }




 
  return (
    <div className="item">
      <h1> Most Popular </h1>
      <Line color='grey' />
      <div className= "card">
        <div className="imgbox">
          <img src="../img/ps5.png" alt="product"></img>
        </div>
        <div className="cardBody">
          <h3>PlayStation 5</h3>
          <h2 className="price">$499.99</h2>
        
          <div className="counterBlock">
            <button id="minus"> - </button>
            <p id="number"> 0 </p>
            <button id="plus"> + </button>
          </div>
          <button className="cart" onClick={(e) => {addToCart(e);}}> Add to Cart</button>
          
          <Link className="heart" to="#" onClick={(e)=>{likedProduct(e);}}> <img src="../img/unheart.png" alt="like button" height="32px" width="32px"></img></Link>
        </div>
      </div>
      <Line color='grey' />
      
    </div>
    
  );
}




export default Item;
  