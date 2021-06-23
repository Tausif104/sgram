import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { createPost } from '../actions/postActions'

const CreatePostScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const postCreate = useSelector((state) => state.postCreate)
    const { loading, success, error, post } = postCreate

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
    }, [history, userInfo])

    const createPostHandler = (e) => {
        e.preventDefault()
        dispatch(createPost(title, image))
    }

    return (
        <div>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <div className='form-wrapper'>
                        {error && <Alert variant='warning'>{error}</Alert>}
                        <h1 className='heading'>Create Post</h1>
                        <Form onSubmit={createPostHandler}>
                            <Form.Group controlId='title'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type='text'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder='Insert post title'
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='image'>
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type='text'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder='Insert image url'
                                ></Form.Control>
                            </Form.Group>

                            <Button
                                variant={
                                    loading
                                        ? 'primary'
                                        : success
                                        ? 'success'
                                        : 'primary'
                                }
                                type='submit'
                            >
                                {loading
                                    ? 'Posting'
                                    : success
                                    ? 'Posted'
                                    : 'Post'}
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CreatePostScreen
