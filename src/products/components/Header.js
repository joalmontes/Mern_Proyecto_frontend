import React from 'react';
import { Container, Section } from 'react-bulma-components'

const Header = ({ title }) => {
    return (
        <Section>
            <Container>
                <h1 className='titles has-text-centered'>{title}</h1>
            </Container>
        </Section>
    )
}

export default Header