import React, { useState, useEffect } from 'react';
import { getProducts } from '../sevices';
import Loading from './Loading';

const ListProduct = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProduct() {
            const response = await getProducts()

            if (response.status === 200) {
                setProducts(response.data.products)
            }

            setIsLoading(false)
        }

        loadProduct()
    }, [])

    if (isLoading) {
        return <Loading />
    }
    if (!products ||!products.length) {
        return  <h2 className='titles has-text-centered'>no hay productos disponible</h2>
    }

    return (
        'mostrar listado'
    )
}

export default ListProduct