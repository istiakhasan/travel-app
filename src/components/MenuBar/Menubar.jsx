import React from 'react'
import {
    Container,
    Navbar,
    Form,
    FormControl,
    Nav,
    Dropdown
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Logo from '../../Images/Logo.png'
import './Menubar.css'

const Menubar = ({showbtn}) => {
    return (
        <Navbar className="">
            <Container fluid="fluid">

                <Navbar.Brand className="logo_container">
                    <Link to="/">
                        {
                            showbtn
                                ? (<img className="logo_img" src={Logo} alt=""/>)
                                : (<img className="logo_img2" src={Logo} alt=""/>)
                        }

                    </Link>

                </Navbar.Brand>
                <Navbar.Collapse  id="navbarScroll">
                    {
                        showbtn && <Form className="search_box">
                                <span className="search_icon ">

                                    <i className="fas fa-search"></i>
                                </span>

                                <FormControl
                                    type="search"
                                    placeholder="Search Your Destination..."
                                    className="me-2  search_input"
                                    
                                    aria-label="Search"/>

                            </Form>

                    }
                   


                    <Nav
                        className="  navbar-wraper "
                        style={{
                            maxHeight: '100px'
                        }}
                        navbarScroll="navbarScroll">
                        <Nav.Link href="#action1">News</Nav.Link>
                        <Nav.Link href="#action2">Destination</Nav.Link>
                        <Nav.Link href="#action2">Blog</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                        
                        {showbtn && <Link className="activebtn" to="/login">Login</Link>}

                    </Nav>
                      

                    <Dropdown className="dropdownbtn">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i className="fas fa-bars"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end" style={{minWidth:"300px"}}>
                          <ul className="dropdown_menu">
                              <li><Link to="/news">News</Link></li>
                              <li><Link to="/destination">Destination</Link></li>
                              <li><Link to="/blog">Blog</Link></li>
                              <li><Link to="/contact">Contact</Link></li>
                              <li><Link to="/login">Login</Link></li>
                          </ul>
                        </Dropdown.Menu>
                    </Dropdown>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default Menubar
