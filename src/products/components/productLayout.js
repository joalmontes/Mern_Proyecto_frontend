import React, { useState } from "react";
import { Modal } from 'react-bulma-components'
import Header from './Header'
import AddButton from "./AddButton";
import ListProduct from "./ListProducts";
import Form from "./form";
import { saveProduct } from "../sevices"

const ProductLayout = () =>{
    const [isModalOpen , SetIsModalOpen] = useState(false)
    
    const handleSubmit = (data) =>{
        saveProduct(data)
    }
    
    return(
        <>
            <Header title="products app"/>
            <AddButton onClick={() =>SetIsModalOpen(true)} />
            <ListProduct />

            <Modal show={isModalOpen} onClose={() => SetIsModalOpen(false) }>
                <Modal.Content>
                    <Modal.Card>
                        <Modal.Card.Header showClose={false}>
                            <Modal.Card.Title >
                                agregar productos
                            </Modal.Card.Title>
                        </Modal.Card.Header>
                        <Modal.Card.Body>
                            <Form handleSubmit ={handleSubmit} /> 
                        </Modal.Card.Body>    
                    </Modal.Card>
                </Modal.Content>    
            </Modal>
        </>
        
    )  
}

export default ProductLayout