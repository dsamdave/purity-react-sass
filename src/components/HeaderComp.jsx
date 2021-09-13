import React from 'react';
import styled from 'styled-components';

const HeaderComp = () => {
    return (
        <Header>
            <nav className="navbar container">
                <a href="/" className="navbar-brand">
                    <img src="/images/logo.svg" alt="logo" />
                </a>

                <ul className="nav">
                    <li className='nav-item'>
                        <a href="/" className='nav-link active'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#products" className='nav-link'>Products</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#about" className='nav-link'>About Us</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact" className='nav-link'>Contact</a>
                    </li>

                </ul>
            </nav>
        </Header>
    )
}

export default HeaderComp

const Header = styled.div`
.navbar{
    &-brand{
        img{
            width: 100%;
            max-width: 2.5rem;
        }
    }
    .nav{
        .nav-item{
            margin: 0 0.7rem;
            .nav-link{
                    color: inherit;
                    font-weight: 700;
                    padding-left:0;
                    padding-right:0;
                    &:hover{
                        color: #00923f;
                    }
                    &.active{
                        color: #00923f;
                        border-bottom: 2px solid #00923f
                    }
                }
        }    
    }
}

`
