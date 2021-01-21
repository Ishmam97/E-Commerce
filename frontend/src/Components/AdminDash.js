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
            setLoading(false);
            setSuccessMsg(response.data.successMsg)
        }).catch(err=>{
            setLoading(false)
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
                        <button className="btn-outline-danger btn-block p-3" data-toggle="modal" data-target="#addCategoryModal">
                            <i className="fas fa-plus mr-1"> </i>
                            <i className="fa fa-shopping-cart mr-1"> </i>                            
                            <span>Add Product</span>
                        </button>

                      </div>
                      <div className="col-md-4 py-3 my-2 " >
                        <button className="btn-outline-success btn-block p-3 " data-toggle="modal" data-target='addCategoryModal'>
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
                    <div className="modal-header bg-danger text-white">
                        <h5>Add a category</h5>
                        <button className="close" data-dismiss="modal" onClick={messageClear}><span><i className='fas fa-times'></i></span></button>
                    </div>
                    <div className="modal-body my-2">
                            {errorMsg && showMsg(errorMsg , 0)}
                            {successMsg && showMsg(successMsg , 1)}              
                            {
                                loading?(
                                    showLoading()
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

  return (
    <section>
      {showAdminHeader()}
      
      {showActionBtns()}

      {showCategoryModal()}
     
    </section>
  );
};

export default AdminDash;
