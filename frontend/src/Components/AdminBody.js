import React from 'react';
import Card from './Card';
import {useSelector} from 'react-redux'

function AdminBody(props) {
    const {products } = useSelector(state => state.products)
    
    return (
        <div className='container'>
            <div className="row card-deck">                
                    {
                        products.map((product , index) =>{
                            return(
                                    <Card key={index} id={product._id} img={product.filename} name={product.pName} price={product.pPrice} qt={product.pQty} cat={product.pCat.category} desc={product.pDesc}/>
                        )})
                    }                
            </div>           
        </div>
    );
}

export default AdminBody;