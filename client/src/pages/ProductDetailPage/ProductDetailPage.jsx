import React from "react";  
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    return (
        <div style={{ background: '#ffffff', height: '100%', width: '100%'}}>
        <div style={{width: '1270px', height: '100%', margin: '0 auto'}}>
        <h2><span style={{cursor: 'pointer', fontWeight: 'bold'}} onClick={() => {navigate('/')}}>Home</span> - Details Product</h2>
        <ProductDetailComponent idProduct={id}/>
        </div>
        </div>
    );
}

export default ProductDetailPage;