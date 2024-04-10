import React, { useState, useEffect} from 'react';
import { getProducts } from '../services';
import Loading from './Loading';

const ListProduct = () => {  
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] =useState([]) 

    useEffect( () =>{
        async function loadProduct (){
            const response = await getProducts()
            console.log(response)
            
            if(response.status === 200){
                setProducts(response.data.products)
            } 
        }
        
        
        loadProduct()
    }, [])

    return (
            isLoading
            ? <Loading />
            : 'mostrar listado'
    )
}

export default ListProduct