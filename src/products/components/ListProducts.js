import React from 'react';
import { Card, Columns, Content, Heading } from 'react-bulma-components'

const ListProduct = ({ products }) => {

    
    return (
        <Columns>
            {
                products.map(( {unitaryPrice, name, size, description, _id, createdAt} ) =>(
                    <Columns.Column size={4} key={_id}>
                        <Card>
                            <Card.Content color='primary'>
                                <Content>
                                    <Heading>
                                        {name}
                                    </Heading>
                                    <Heading subtitle size={6}>price: { unitaryPrice }</Heading>
                                    <Heading subtitle size={6}>price: { size }</Heading>
                                    <p>
                                        {createdAt}
                                    </p>
                                    <p>
                                        {description}
                                    </p>
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

