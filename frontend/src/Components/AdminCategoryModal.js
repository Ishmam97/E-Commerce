import React, { Fragment, useState } from "react";
// import { createCategory } from "../api/category";
import isEmpty from "validator/lib/isEmpty";
import showMsg from "./helpers/Message";
import showLoading from "./helpers/Loading";

//redux
import {useSelector , useDispatch} from 'react-redux'
import {clear_messages} from '../Redux/actions/messageActions'
import {createCategory} from '../Redux/actions/categoryActions'
const ShowCategoryModal = () => {
    //redux global states
    const {successMsg , errorMsg} = useSelector(state => state.messages)
    const {loading} = useSelector(state => state.loading)
    const dispatch = useDispatch()
    //local states
    const [category, setCategory] = useState("");
    const [cErrorMsg, setCErrorMsg] = useState("");
    // const [successMsg, setSuccessMsg] = useState("");
    // const [loading, setLoading] = useState(false);


    const messageClear = (evt) => {
      dispatch(clear_messages())
      setCErrorMsg("")
    };

    const handleCategoryChange = (evt) => {
        setCategory(evt.target.value);
        dispatch(clear_messages())
        setCErrorMsg("")
    };

    const handleCategorySubmit = (evt) => {
        evt.preventDefault();
        if (isEmpty(category)) {
          setCErrorMsg("Cant be empty");
          
        } else {
          const data = { category };
          dispatch(createCategory(data))
          setCategory('')
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
                {cErrorMsg && showMsg(cErrorMsg, 0)}
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