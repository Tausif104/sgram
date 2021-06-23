import { Link } from 'react-router-dom'
import { Col, Card, Spinner, Alert, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

const Post = ({ post }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    return (
        <Col md={7}>
            <Card
                className='post-card'
                style={{ width: '100%', marginBottom: '40px' }}
            >
                <Card.Header>
                    <h4 className='justify-content-between d-flex align-items-center'>
                        <Link to={`/users/${post.user && post.user._id}`}>
                            <i className='far fa-user-circle'></i>
                            <span className='username'>
                                {post.user && post.user.name}
                            </span>
                        </Link>
                        <span className='timestamp'>
                            <i className='far fa-clock'></i>
                            {moment(post.createdAt).fromNow()}
                        </span>
                    </h4>
                </Card.Header>
                <Link to={`/post/${post._id}`}>
                    <Card.Img variant='top' src={post.image} />
                </Link>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Post
