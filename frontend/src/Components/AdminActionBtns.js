import React from 'react'
const showActionBtns = (props) => {
    //receive setShowModal from AdminDash
    const {setShowProductModal, setShowCategoryModal} = props
    return (
      <div className="bg-light py-3">
        <div className="container border border-warning my-2">
          <div className="row border p-2">
            <div className="col-md-4 py-3 my-2 ">
              <button
                className="btn-outline-danger btn-block p-3"
                onClick={() => setShowProductModal(true)}
              >
                <i className="fas fa-plus mr-1"> </i>
                <i className="fa fa-shopping-cart mr-1"> </i>
                <span>Add Product</span>
              </button>
            </div>
            <div className="col-md-4 py-3 my-2 ">
              <button
                className="btn-outline-success btn-block p-3 "
                onClick={() => setShowCategoryModal(true)}
              >
                <i className="fas fa-plus mr-1"> </i>
                <i className="fa fa-list-alt mr-1"> </i>
                <span>Add Category</span>
              </button>
            </div>
            <div className="col-md-4 py-3 my-2 ">
              <button
                className="btn-outline-primary btn-block p-3 "
                data-toggle="modal"
                data-target="addCategoryModal"
              >
                <i className="fa fa-money-check-alt mr-1"> </i>
                <span>View Orders</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default showActionBtns