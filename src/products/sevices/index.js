import  axios  from 'axios';


const baseUrl = process.env.REACT_APP_BASE_URL

export async function getProducts(){
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

export async function saveProduct(productData){
    try {
        const formData = new FormData()

        formData.append('nombre_funcionario', productData.nombre_funcionario )
        formData.append('aparato', productData.aparato )
        formData.append('numero', productData.numero )
        formData.append('lugar_donde', productData.lugar_donde )
        formData.append('fecha_entrega', productData.fecha_entrega )

        const response = await axios({
            url: `${baseUrl}/products`,
            method:'post', 
            data: formData
        })
        return response
    } catch (e) {
        console.log(e)
    }
}