import React from "react";


//components
import AdminHeader from './AdminHeader'
import ActionBtns from './AdminActionBtns'
import CategoryModal from './AdminCategoryModal'
import ProductModal from './AdminProductModal'
const AdminDash = () => {

  return (
    <section>
      <AdminHeader/>

      <ActionBtns/>

      <CategoryModal/>
      <ProductModal/>
    </section>
  );
};

export default AdminDash;
