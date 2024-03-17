import React from 'react';
import {Navbar , Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {FaShoppingCart,FaUser,} from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import logo from '../assets/logo.png'

const Header=()=>{
    return(
        <header>
            <Navbar bg="black" variant='dark'  expand="md" collapseOnSelect>
                <Container >
                    <LinkContainer to='/'>
                    <Navbar.Brand  >
                       <img src={logo} alt=" not loaded"/>
                        OrderMe
                    </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                             <Nav.Link ><FaShoppingCart/> Cart  </Nav.Link>
                             </LinkContainer>
                             <LinkContainer to='/login'>

                            <Nav.Link ><FaUser/>Sign in</Nav.Link>
                            </LinkContainer>
                            {/* <Nav.Link href='/login'><CgProfile/>Profile</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header 