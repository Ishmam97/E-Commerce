import React from "react";
import {Link} from 'react-router-dom'
import './css/card.css'

import {useDispatch} from 'react-redux'
import {delProduct} from '../Redux/actions/productActions'
function Card({id , img , name , price , qt , cat, desc}) {
  const dispatch = useDispatch();
  
  return (
    <div className="col-md-4 my-3">
      <div className='card'>
        <h1 className='text-center'>{name}</h1>
        <div className='text-center'>
          <a href="#">
            <img className='img-fluid pImg' src={`http://localhost:9001/uploads/${img}`} alt="product"/>
          </a> 
        </div>       
        <p className="text-justify text-center">{desc.length >100 ?
         (desc.substring(0 , 100)+'...'):(desc)}</p>
        <span className="text-center">Tk.{price}</span>
        <div className="buttons">
          <Link to={`/admin/edit/product/${id}`}>
            <button className='btn btn-success btn-md m-1'>
              <i className="far fa-edit pr-1"></i>Edit
            </button>
          </Link>
          
          <button className='btn btn-danger btn-md m-1' onClick={()=>{
          dispatch(delProduct(id))}
          }><i className="far fa-trash-alt pr-1" ></i>Delete</button>
        </div>
      </div>  
    </div>
    
  );
}

export default Card;
