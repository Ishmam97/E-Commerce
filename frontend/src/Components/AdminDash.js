import React, { Fragment, useState } from "react";
import {createCategory} from '../api/category'
import isEmpty from 'validator/lib/isEmpty'
import showMsg from './helpers/Message'
import showLoading from './helpers/Loading'

const AdminDash = () => {
  const [category , setCategory ] = useState('');
  const [errorMsg , setErrorMsg] = useState('');
  const [successMsg , setSuccessMsg] = useState('');
  const [loading , setLoading] = useState('');
  const handleCategoryChange = evt =>{
    setCategory(evt.target.value);    
    setSuccessMsg('')
  }
  const handleCategorySubmit = evt =>{
    evt.preventDefault();
    if (isEmpty(category)){
        setErrorMsg('Cant be empty')
        setSuccessMsg('')
    }else{
        setErrorMsg('')
        setSuccessMsg('Valid Entry')
        setLoading(true)
        const data = {category}
        createCategory(data).then(response=>{            
            setSuccessMsg(response.data.successMsg)
            setLoading(false);
            setCategory('')
            setErrorMsg('')
        }).catch(err=>{
            setLoading(false)
            setSuccessMsg('')
            setErrorMsg(err.response.data.errorMsg)
        })
    }
    
  }
  const messageClear= (evt)=>{
    setErrorMsg('')
    setSuccessMsg('')
  }
  const showAdminHeader = () => {
    
    return (
      <div className="bg-light p-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>
                    <i className="fas fa-user"> Dashboard</i>
                    </h1>
                </div>
            </div>
        </div>
      </div>
    );
  };

  const showActionBtns = ()=>{
      return(
          <div className="bg-light py-3">
              <div className="container border border-warning my-2">
                  <div className="row border p-2">
                      <div className="col-md-4 py-3 my-2 " >
                        <button className="btn-outline-danger btn-block p-3" data-toggle="modal" data-target="#addProductModal">
                            <i className="fas fa-plus mr-1"> </i>
                            <i className="fa fa-shopping-cart mr-1"> </i>                            
                            <span>Add Product</span>
                        </button>

                      </div>
                      <div className="col-md-4 py-3 my-2 " >
                        <button className="btn-outline-success btn-block p-3 " data-toggle="modal" data-target='#addCategoryModal'>
                                <i className="fas fa-plus mr-1"> </i>
                                <i className="fa fa-list-alt mr-1"> </i>                            
                                <span>Add Category</span>
                            </button>
                      </div>
                      <div className="col-md-4 py-3 my-2 " >
                        <button className="btn-outline-primary btn-block p-3 " data-toggle="modal" data-target='addCategoryModal'>                                
                                <i className="fa fa-money-check-alt mr-1"> </i>                            
                                <span>View Orders</span>
                            </button>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

  const showCategoryModal = () =>{
      return(
        <div id="addCategoryModal" className='modal'>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <form className="p-3" onSubmit={handleCategorySubmit}>
                    <div className="modal-header bg-success text-white">
                        <h5>Add a category</h5>
                        <button className="close" data-dismiss="modal" onClick={messageClear}><span><i className='fas fa-times'></i></span></button>
                    </div>
                    <div className="modal-body my-2">
                            {errorMsg && showMsg(errorMsg , 0)}
                            {successMsg && showMsg(successMsg , 1)}              
                            {
                                loading?(
                                    <div className='text-center'>{showLoading()}</div>
                                    ):(
                                    <Fragment>
                                        <label className="text-secondary">Category</label>
                                        <input name='category' value={category} type="text" className='form-control' onChange={handleCategoryChange}/>
                                    </Fragment>
                                )
                            }
                            
                        
                    </div>
                    <div className="modal-footer">
                        <button type='button' className='btn btn-danger' data-dismiss='modal' onClick={messageClear}>close</button>
                        <button type='submit' className="btn btn-success">Submit</button>
                    </div>
                </form>
                </div>
                
            </div>
        </div>
      )
  }
  const showProductModal = () =>{
    return(
      <div id="addProductModal" className='modal'>
          <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
              <form className="p-3" onSubmit={handleCategorySubmit}>
                  <div className="modal-header bg-danger text-white">
                      <h5>Add a Product</h5>
                      <button className="close" data-dismiss="modal" onClick={messageClear}><span><i className='fas fa-times'></i></span></button>
                  </div>
                  <div className="modal-body my-2">
                          {errorMsg && showMsg(errorMsg , 0)}
                          {successMsg && showMsg(successMsg , 1)}              
                          {
                              loading?(
                                  <div className='text-center'>{showLoading()}</div>
                                  ):(
                                  <Fragment>
                                      <div className='custom-file mb-4'>
                                        <label htmlFor="file">Choose image:</label>
                                        <input type="file" name='file' className='form-control-file'/>
                                      </div>
                                      <div className="form-group">
                                        <label className="text-secondary">Name</label>
                                        <input type="text" className='form-control'/>
                                      </div>
                                      <div className="form-group">
                                        <label className="text-secondary">Description</label>
                                        <textarea className='form-control' rows='3'/>
                                      </div>
                                      <div className="form-group">
                                        <label className="text-secondary">Price</label>
                                        <input type="text" className='form-control'/>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="pCat" className='text-secondary'>Select category</label>
                                            <select name='pCat' className="form-contorl custom-select nr-sm-2" id="pCat">
                                                <option selected>Choose one..</option>
                                                <option value="Console">Console</option>
                                                <option value="Chips">Chips</option>
                                            </select>                                            
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="quantity text-secondary">Choose Quantity</label>
                                            <input className='form-control' name='quantity' type="number" min='0'/>
                                        </div>
                                      </div>
                                  </Fragment>
                              )
                          }
                          
                      
                  </div>
                  <div className="modal-footer">
                      <button type='button' className='btn btn-danger' data-dismiss='modal' onClick={messageClear}>close</button>
                      <button type='submit' className="btn btn-success">Submit</button>
                  </div>
              </form>
              </div>
              
          </div>
      </div>
    )
}

  return (
    <section>
      {showAdminHeader()}
      
      {showActionBtns()}

      {showCategoryModal()}
      {showProductModal()}
    </section>
  );
};

export default AdminDash;
