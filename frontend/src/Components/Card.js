import React from "react";


function Card({id , img , name , price , qt , cat, desc}) {
  return (
    <div className="col-md-4 my-3">
      <div className='card h-100'>
        <h1>{name}</h1>
        <a href="#">
          <img className='img-fluid' src={`http://localhost:9001/${img}`} alt="product"/>
        </a>        
        <p className="text-justify">{desc}</p>
        <span>{price}</span>
      </div>  
    </div>
    
  );
}

export default Card;
