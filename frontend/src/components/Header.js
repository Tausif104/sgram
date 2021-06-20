// importing packages

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'

// importing files
import { logout } from '../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <div>
            <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
                <Container>
                    <Link className='navbar-brand' to='/'>
                        Sgram
                    </Link>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        {userInfo ? (
                            <Nav className='ml-auto'>
                                <Link className='nav-link' to='/create'>
                                    Create
                                </Link>
                                <Link className='nav-link' to='/users/profile'>
                                    {userInfo.name}
                                </Link>
                                <Link className='nav-link' to='/users'>
                                    All Users
                                </Link>
                                <a
                                    href=''
                                    onClick={logoutHandler}
                                    className='nav-link'
                                >
                                    Logout
                                </a>
                            </Nav>
                        ) : (
                            <Nav className='ml-auto'>
                                <Link className='nav-link' to='/login'>
                                    Login
                                </Link>
                                <Link className='nav-link' to='/signup'>
                                    Sign Up
                                </Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
