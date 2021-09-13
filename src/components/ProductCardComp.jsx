import React from 'react';
import styled from 'styled-components';

const ProductCardComp = ({product}) => {
    return (
        <Wrapper>
            <div className='inner'>
                <img src={product.image} alt="" />
                <h4 className="heading-2 my-3">
                    {product.title}
                </h4>
                <p>
                    {product.description}
                </p>
            </div>

        </Wrapper>
    )
}

export default ProductCardComp

const Wrapper = styled.div`
    .inner{
        img{
            width:100%;
            height: 23.5rem;
            object-fit:cover;
            object-position: center;
            
        }
    }
`
