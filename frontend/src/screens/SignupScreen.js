import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Alert, Spinner } from 'react-bootstrap'
import { register } from '../actions/userActions'

const SignupScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <div>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className='form-wrapper'>
                        <h4 className='mb-30'>Sign Up</h4>
                        {message && <Alert variant='warning'>{message}</Alert>}
                        {error && <Alert variant='warning'>{error}</Alert>}

                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

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

                            <Form.Group controlId='confirmPassword'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                ></Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                {loading ? (
                                    <span>
                                        Singing Up
                                        <Spinner
                                            className='ml-10'
                                            animation='border'
                                        />
                                    </span>
                                ) : (
                                    'Sign Up'
                                )}
                            </Button>
                        </Form>
                        <Row className='py-3'>
                            <Col>
                                Have an Account?
                                <Link
                                    to={
                                        redirect
                                            ? `/login?redirect=${redirect}`
                                            : '/login'
                                    }
                                >
                                    Login
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SignupScreen
