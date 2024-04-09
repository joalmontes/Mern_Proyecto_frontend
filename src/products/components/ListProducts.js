import React, { useState } from 'react';
import Loading from './Loading';

const ListProduct = () => {  
    const [isLoading, setIsLoading] = useState(true)

    return (
            isLoading
            ? <Loading />
            : 'mostrar listado'
    )
}

export default ListProduct