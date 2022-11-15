import React from 'react';
import Container from '../Container';
import Button from './Button';
import Header from './Header';
import Text from './Text';

function Context() {
    return (
        <Container>
            <div className='context'>
                <Header />
                <Text />
                <Button />
            </div>
        </Container>
    );
}

export default Context;