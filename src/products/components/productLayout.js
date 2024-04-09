import React from "react";
import Header from './Header'
import AddButton from "./AddButton";
import ListProduct from "./ListProducts";

const ProductLayout = () =>{
    return(
        <>
            <Header title="products app"/>
            <AddButton/>
            <ListProduct/>
        </>
        
    )  
}

export default ProductLayout