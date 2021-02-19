import React , {useEffect} from "react";


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
  },[dispatch])
  return (
    <section>
      <AdminHeader/>
      <ActionBtns/>
      <CategoryModal/>
      <ProductModal/>
      <AdminBody/>
    </section>
  );
};

export default AdminDash;
