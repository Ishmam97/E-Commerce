import React from "react";
import './css/card.css'

function Card({id , img , name , price , qt , cat, desc}) {
  return (
    <div className="col-md-4 my-3">
      <div className='card'>
        <h1 className='text-center'>{name}</h1>
        <div className='text-center'>
          <a href="#">
            <img className='img-fluid pImg' src={`http://localhost:9001/uploads/${img}`} alt="product"/>
          </a> 
        </div>       
        <p className="text-justify text-center">{desc}</p>
        <span className="text-center">Tk.{price}</span>
      </div>  
    </div>
    
  );
}

export default Card;
