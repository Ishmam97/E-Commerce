import React from "react";
import { Link } from "react-router-dom";
import "./css/card.css";

import { useDispatch } from "react-redux";
import { delProduct } from "../Redux/actions/productActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

function Card({ id, img, name, price, qt, cat, desc }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h4 className="text-center text-truncate mt-2">{name}</h4>
      <div className="image-container text-center">
        <img
          className="img-fluid pImg"
          src={`http://localhost:9001/uploads/${img}`}
          alt="product"
        />
      </div>
      <p className="text-truncate text-center">
        {desc}
      </p>
      <span className="text-center">{price}</span>
      <div className="buttons">
        <Link to={`/admin/edit/product/${id}`}>
          <button className="btn btn-success btn-md m-1">
            <FontAwesomeIcon icon={faEdit} className="pr-1" />
          </button>
        </Link>

        <button
          className="btn btn-danger btn-md m-1"
          onClick={() => {
            dispatch(delProduct(id));
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} className="pr-1" />
        </button>
      </div>
    </div>
  );
}

export default Card;
