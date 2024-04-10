import React, { useState } from "react";
import { Modal } from 'react-bulma-components'
import Header from './Header'
import AddButton from "./AddButton";
import ListProduct from "./ListProducts";

const ProductLayout = () =>{
    const [isModalOpen , SetIsModalOpen] = useState(false)
    return(
        <>
            <Header title="products app"/>
            <AddButton onClick={() =>SetIsModalOpen(true)} />
            <ListProduct />
            <Modal show={isModalOpen} onClose={() => SetIsModalOpen(false) }>
                <Modal.Content>
                    <Modal.Card>
                        <Modal.Card.Header>
                            from
                        </Modal.Card.Header>
                        <Modal.Card.Body>
                            formulario aqui
                        </Modal.Card.Body>    
                    </Modal.Card>
                </Modal.Content>    
            </Modal>
        </>
        
    )  
}

export default ProductLayout