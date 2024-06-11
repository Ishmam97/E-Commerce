import React, { Fragment, useState } from "react";
// import { getCategories } from "../api/category";
// import { createProduct } from "../api/product";
import isEmpty from "validator/lib/isEmpty";
import showMsg from "./helpers/Message";
import showLoading from "./helpers/Loading";
import { useSelector, useDispatch } from "react-redux";
import { clear_messages } from "../Redux/actions/messageActions";
import { createProduct } from "../Redux/actions/productActions";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ShowProductModal = (props) => {
  //get setShowModal function from props
  const { showModal, setShowModal } = props;
  //redux globals
  const { successMsg, errorMsg } = useSelector((state) => state.messages);
  const { loading } = useSelector((state) => state.loading);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  //
  // const [categories, setCategories] = useState(null);
  const [cErrorMsg, setCErrorMsg] = useState("");
  // const [cSuccessMsg, setCSuccessMsg] = useState("");

  const [productData, setProductData] = useState({
    pImg: null,
    pName: "",
    pDesc: "",
    pPrice: "",
    pCat: "",
    pQty: "",
  });
  const { pImg, pName, pDesc, pCat, pPrice, pQty } = productData;
  // //LifeCycle hooks
  // useEffect(() => {
  //   loadCategoires();
  // }, [loading]);

  // const loadCategoires = async () => {
  //   dispatch(getCategories())
  // };
  //event handlers

  const messageClear = (evt) => {
    dispatch(clear_messages());
  };
  const handleClose = () => {
    setShowModal(false);
    messageClear()
  };
  const handleProductImg = (evt) => {
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.files[0],
    });
  };
  const handleProductChange = (evt) => {
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleProductSubmit = (evt) => {
    evt.preventDefault();
    if (pImg === null) {
      setCErrorMsg("Please select img");
    } else if (
      isEmpty(pName) ||
      isEmpty(pPrice) ||
      isEmpty(pDesc) ||
      isEmpty(pQty)
    ) {
      setCErrorMsg("ALL fields required!");
    } else if (isEmpty(pCat)) {
      setCErrorMsg("please select a category");
    } else {
      //success
      setCErrorMsg("");
      // setSuccessMsg("Success");
      // setLoading(true)
      let formData = new FormData();
      formData.append("pImg", pImg);
      formData.append("pName", pName);
      formData.append("pDesc", pDesc);
      formData.append("pPrice", pPrice);
      formData.append("pQty", pQty);
      formData.append("pCat", pCat);

      dispatch(createProduct(formData));
      setProductData({
        pImg: null,
        pName: "",
        pDesc: "",
        pPrice: "",
        pCat: "",
        pQty: "",
      });
    }
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {cErrorMsg && showMsg(cErrorMsg, 0)}
               {errorMsg && showMsg(errorMsg, 0)}
               {successMsg && showMsg(successMsg, 1)}
               {loading ? (
                <div className="text-center">{showLoading()}</div>
          ) : ( 
              <Fragment>
                {/* an Input for uploading product image */}
                <div className="custom-file mb-4">
                  <label htmlFor="file">Choose image:</label>
                  <input type="file" name="pImg" className="form-control-file" onChange={handleProductImg} />
                </div>
                {/* an Input for product name */}
                <div className="form-group">
                  <label className="text-secondary">Name</label>
                  <input type="text" className="form-control" name="pName" onChange={handleProductChange} />
                </div>
                {/* an Input for product description */}
                <div className="form-group">
                  <label className="text-secondary">Description</label>
                  <textarea className="form-control" rows="2" name="pDesc" onChange={handleProductChange} />
                </div>
                {/* an Input for product price */}
                <div className="form-group">
                  <label className="text-secondary">Price</label>
                  <input type="text" className="form-control" name="pPrice" onChange={handleProductChange} />
                </div>
                {/* an Input for product category */}
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="pCat" className="text-secondary">
                      Select category
                    </label>
                    <select name="pCat" className="form-contorl custom-select nr-sm-2" id="pCat" onChange={handleProductChange}>
                      <option selected value="">
                        Choose one..
                      </option>
                      {/*Load Categories from database and populate options with categories*/}
                      {categories &&
                        categories.map((c) => {
                          return (
                            <option key={c._id} value={c._id}>
                              {c.category}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  {/* an Input for product quantity */}
                  <div className="form-group col-md-6">
                    <label htmlFor="quantity " className="text-secondary">
                      Choose Quantity
                    </label>
                    <input className="form-control" name="pQty" type="number" min="0" onChange={handleProductChange} />
                  </div>
                </div>
              </Fragment>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleProductSubmit}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowProductModal;
