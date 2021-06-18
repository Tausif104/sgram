import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className='form-wrapper'>
                        <h4 className='mb-30'>Login</h4>
                        {error && <Alert variant='warning'>{error}</Alert>}

                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter Password'
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                ></Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                {loading ? (
                                    <span>
                                        Singing In
                                        <Spinner
                                            className='ml-10'
                                            animation='border'
                                        />
                                    </span>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </Form>
                        <Row className='py-3'>
                            <Col>
                                New Customer?
                                <Link
                                    to={
                                        redirect
                                            ? `/signup?redirect=${redirect}`
                                            : '/signup'
                                    }
                                >
                                    Register
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LoginScreen
