import React, { Fragment, useState, useEffect } from "react";
import { createCategory } from "../api/category";
import isEmpty from "validator/lib/isEmpty";
import showMsg from "./helpers/Message";
import showLoading from "./helpers/Loading";

const ShowCategoryModal = () => {
    
    const [category, setCategory] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);


    const messageClear = (evt) => {
    setErrorMsg("");
    setSuccessMsg("");
    };

    const handleCategoryChange = (evt) => {
        setCategory(evt.target.value);
        setSuccessMsg("");
    };

    const handleCategorySubmit = (evt) => {
        evt.preventDefault();
        if (isEmpty(category)) {
          setErrorMsg("Cant be empty");
          setSuccessMsg("");
        } else {
          setErrorMsg("");
          setSuccessMsg("Valid Entry");
          setLoading(true);
          const data = { category };
          createCategory(data)
            .then((response) => {
              setSuccessMsg(response.data.successMsg);
              setLoading(false);
              setCategory("");
              setErrorMsg("");
            })
            .catch((err) => {
              setLoading(false);
              setSuccessMsg("");
              setErrorMsg(err.response.data.errorMsg);
            });
        }
    };

    return (
      <div id="addCategoryModal" className="modal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <form className="p-3" onSubmit={handleCategorySubmit}>
              <div className="modal-header bg-success text-white">
                <h5>Add a category</h5>
                <button
                  className="close"
                  data-dismiss="modal"
                  onClick={messageClear}
                >
                  <span>
                    <i className="fas fa-times"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body my-2">
                {errorMsg && showMsg(errorMsg, 0)}
                {successMsg && showMsg(successMsg, 1)}
                {loading ? (
                  <div className="text-center">{showLoading()}</div>
                ) : (
                  <Fragment>
                    <label className="text-secondary">Category</label>
                    <input
                      name="category"
                      value={category}
                      type="text"
                      className="form-control"
                      onChange={handleCategoryChange}
                    />
                  </Fragment>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={messageClear}
                >
                  close
                </button>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default ShowCategoryModal