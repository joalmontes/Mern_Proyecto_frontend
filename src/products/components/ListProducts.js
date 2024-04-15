import React from 'react';
import { Card, Columns, Content, Heading } from 'react-bulma-components'
import { deleteProduct } from '../sevices';

const ListProduct = ({ products }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',};
        return date.toLocaleDateString('es-ES', options);
    };
    const formatDate2 = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit'};
        return date.toLocaleDateString('es-ES', options);
    };

    
    return (
        <Columns>
            {
                products.map(( {nombre_funcionario, aparato, numero, lugar_donde, fecha_entrega, _id, createdAt} ) =>(
                    <Columns.Column size={4} key={_id}>
                        <Card>
                            <Card.Content color='primary'>
                                <Content>
                                    <Heading>
                                        {nombre_funcionario}
                                    </Heading>
                                    
                                    <Heading subtitle size={6}> Aparato: { aparato } { numero }</Heading>
                                    <Heading subtitle size={6}> Fecha de prestamo: { formatDate(createdAt) }</Heading>
                                    <p>
                                        Fecha de entrega: {formatDate2(fecha_entrega)}
                                    </p>
                                    <p>
                                        Lugar dode debe estar: {lugar_donde}
                                    </p>
                                    <button onClick={() => deleteProduct(_id)}>
                                        entregado
                                    </button>
                                </Content>
                            </Card.Content>
                        </Card>
                    </Columns.Column>
                ))
            }
        </Columns>
    )
}

export default ListProduct

