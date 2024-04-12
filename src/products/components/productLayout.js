import React, { useState, useEffect } from "react";
import { Modal } from 'react-bulma-components'
import Header from './Header'
import AddButton from "./AddButton";
import ListProduct from "./ListProducts";
import Form from "./form";
import { saveProduct, getProducts } from "../sevices"
import Loading from './Loading';


const ProductLayout = () =>{
    const [isModalOpen , SetIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([]);
    

    async function loadProduct() {
        const response = await getProducts()


        if (response.status === 200) {
            setProducts(response.data.products)
        }

        setIsLoading(false)
    }
    
    useEffect(() => {

        loadProduct()
    }, [])
    
    const handleSubmit = async (data) =>{
        await saveProduct(data)
        loadProduct()
    }
    
    return(
        <>
            <Header title="products app"/>
            <AddButton onClick={() =>SetIsModalOpen(true)} />
            {
                isLoading &&  <Loading />
            }
            {
                !isLoading && !products.length && (<h2 className='titles has-text-centered'>no hay productos disponible</h2>)         
            }
            {
                !isLoading && products.length>0 && (<ListProduct products={products}/>)
            }
            

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