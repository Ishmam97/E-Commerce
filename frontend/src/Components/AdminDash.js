import React , {useEffect, useState} from "react";

//components
import AdminHeader from './AdminHeader'
import ActionBtns from './AdminActionBtns'
import CategoryModal from './AdminCategoryModal'
import ProductModal from './AdminProductModal'
import AdminBody from './AdminBody'
//REDUX
import {useDispatch} from 'react-redux'
import {getCategories} from '../Redux/actions/categoryActions'
import {getProducts} from '../Redux/actions/productActions'
const AdminDash = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCategories())
  }, [dispatch])
  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])
  
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  return (
    <section>
      <AdminHeader/>
      <ActionBtns setShowProductModal={setShowProductModal} setShowCategoryModal={setShowCategoryModal} />
      <CategoryModal showModal={showCategoryModal} setShowModal={setShowCategoryModal} />
      {/* product modal and pass showModal and setShow as props */}
      <ProductModal showModal={showProductModal} setShowModal={setShowProductModal}/>
      <AdminBody/>
    </section>
  );
};

export default AdminDash;
