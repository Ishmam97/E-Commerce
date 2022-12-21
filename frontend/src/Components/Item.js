import React from "react";
import AddToCartButton from "./AddToCartButton";
import "./css/item.css";

function Item({id , img , name , price , qt , cat, desc}) {
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
          <span className="text-center">${price}</span>
          <div className="buttons my-2 d-flex align-items-center">
            <AddToCartButton pId={id} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Item;
