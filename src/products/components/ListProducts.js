import React, { useState, useEffect} from 'react';
import  axios  from 'axios';
import Loading from './Loading';

const baseUrl = `http://127.0.0.1:8081/v1`

async function getProducts(){
    try {
        const response = await axios({
            url: `${baseUrl}/products`,
            method:'get'
        })

        return response
    } catch (e) {
        console.log(e)
    }
}

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
    })

    return (
            isLoading
            ? <Loading />
            : 'mostrar listado'
    )
}

export default ListProduct