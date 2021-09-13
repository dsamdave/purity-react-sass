import React from 'react';
import styled from 'styled-components';

const TitleComp = ({title}) => {
    return (
        <Wrapper className='title-comp'>
            <div className='line bg-success' />
            <h2 className='mx-2 heading-1'>{title}</h2>
            <div className='line bg-success' />
        </Wrapper>
    )
}

export default TitleComp

const Wrapper = styled.div `
    display: flex;
    align-items:center;
    justify-content:center;

        .line{
            height:3px;
            width:100%
        }
`
