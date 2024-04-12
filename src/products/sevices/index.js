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

        formData.append('name', productData.name )
        formData.append('unitaryPrice', productData.priceUnitary )
        formData.append('size', productData.size )
        formData.append('description', productData.description )


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