import React, { Fragment, useState } from "react";
// import { createCategory } from "../api/category";
import isEmpty from "validator/lib/isEmpty";
import showMsg from "./helpers/Message";
import showLoading from "./helpers/Loading";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//redux
import { useSelector, useDispatch } from "react-redux";
import { clear_messages } from "../Redux/actions/messageActions";
import { createCategory } from "../Redux/actions/categoryActions";

const ShowCategoryModal = (props) => {
  const { showModal, setShowModal } = props;
  //redux global states
  const { successMsg, errorMsg } = useSelector((state) => state.messages);
  const { loading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  //local states
  const [category, setCategory] = useState("");
  const [cErrorMsg, setCErrorMsg] = useState("");
  // const [successMsg, setSuccessMsg] = useState("");
  // const [loading, setLoading] = useState(false);

  const messageClear = (evt) => {
    dispatch(clear_messages());
    setCErrorMsg("");
  };

  const handleClose = () => {
    setShowModal(false);
    messageClear();
  };

  const handleCategoryChange = (evt) => {
    setCategory(evt.target.value);
    dispatch(clear_messages());
    setCErrorMsg("");
  };

  const handleCategorySubmit = (evt) => {
    evt.preventDefault();
    if (isEmpty(category)) {
      setCErrorMsg("Cant be empty");
    } else {
      const data = { category };
      dispatch(createCategory(data));
      setCategory("");
    }
  };

  return (
    <Modal show={showModal} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Add a category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleCategorySubmit}>
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
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCategorySubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowCategoryModal;
