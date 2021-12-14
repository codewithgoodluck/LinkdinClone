import styled from "styled-components"
import React from 'react'

const Login = () => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="images/login-logo.svg" alt="" />
                </a>
                <div>
                    <Join>
                        Join now
                    </Join>
                </div>
            </Nav>
        </Container>
    )
}

export default Login

const Container=  styled.div`
padding:0px;

`
const Nav=styled.div`
max-width:1128px;
margin:auto;
padding:12px 0 16px;
display:flex;
align-items:center;
position:relative;
justify-content:space-between;

& > a {
    width:335px;
    height:34px;
    @media (max-width:760px){
        padding:0 5px;
    }
}

`

const Join=styled.a`
font-size:16px;
padding:10px 12px;
color:rgba(0, 0, 0, 0.6);
margin-right:12px;
border-radius:4px;

&:hover {
    background-color:rgba(0, 0, 0, 0.08);
    color:rgba(0, 0, 0, 0.9);
    text-decoration:none;
}

`
