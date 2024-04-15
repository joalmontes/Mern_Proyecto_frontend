import React, { useState, useEffect } from "react";
import { Modal, Container } from 'react-bulma-components'
import Header from './Header'
import AddButton from "./AddButton";
import AddButton1 from "./AddButton1";
import ListProduct from "./ListProducts";
import Form from "./form";
import FormFuncionario from "./formFuncionarios";
import { saveProduct, getProducts, saveFuncionario, getFuncionario } from "../sevices"
import Loading from './Loading';


const ProductLayout = () =>{
    const [isModalOpen , SetIsModalOpen] = useState(false)
    const [isModalOpen1, SetIsModalOpen1] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [funcionarios, setFuncionarios]= useState([])

    console.log(funcionarios)
    console.log(products)

    async function loadProduct() {
        const response = await getProducts()

        if (response.status === 200) {
            setProducts(response.data.products)
        }

        setIsLoading(false)
    }
    
    async function loadFuncionario(){
        const response = await getFuncionario()

        if (response.status === 200) {
            setFuncionarios(response.data.funcionarios)
        }
    }


    useEffect(() => {
        loadFuncionario()
        loadProduct()
    }, [])
    
    const handleSubmit = async (data) =>{
        await saveProduct(data)
        loadProduct()
        SetIsModalOpen(false)
    }
    
    const handleSubmit1 = async (data) =>{
        console.log(data)
        await saveFuncionario(data)
        loadFuncionario()
        SetIsModalOpen1(false)
    }

    return(
        <Container>
            <Header title="products app"/>
            <AddButton onClick={() =>SetIsModalOpen(true)} />
            <AddButton1 onClick={() =>SetIsModalOpen1(true)} />
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

            <Modal show={isModalOpen1} onClose={() => SetIsModalOpen1(false) }>
                <Modal.Content>
                    <Modal.Card>
                        <Modal.Card.Header showClose={false}>
                            <Modal.Card.Title >
                                funcionario
                            </Modal.Card.Title>
                        </Modal.Card.Header>
                        <Modal.Card.Body>
                            <FormFuncionario handleSubmit1 ={handleSubmit1} /> 
                        </Modal.Card.Body>    
                    </Modal.Card>
                </Modal.Content>    
            </Modal>
        </Container>
        
    )  
}

export default ProductLayout