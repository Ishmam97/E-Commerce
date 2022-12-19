import React , { useState } from "react";
import "./css/item.css";
import { Link } from "react-router-dom";

function Item({id , img , name , price , qt , cat, desc}) {
  const [count, setCount] = useState(0);
  console.log(count)
  return (
    <div className="item my-3">
      <div className="imgbox">        
        <img className='img-fluid pImg' src={`http://localhost:9001/uploads/${img}`} alt={`${id}_${name}_${cat}_${desc}`}></img>
      </div>
      {/* center div contents */}
      <div className="details">
        <div className="content d-flex flex-column align-items-center">
          <h2>{name}</h2>
          <p>{desc.length > 100 ?
            (desc.substring(0, 100) + "...") : (desc)}</p>
          <span className="text-center">Tk.{price}</span>
          <div className="buttons">
            {/* add to cart button when clicked turns into a counter with + and -  */}
            <button className='btn btn-success btn-md m-1' onClick={() => {
              setCount(count + 1)
            }}>
              <i className="fas fa-cart-plus pr-1"></i>Add to Cart
            </button>
            <Link to={`/product/${id}`}>
              <button className='btn btn-primary btn-md m-1'>
                <i className="fas fa-info-circle pr-1"></i>Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Item;
