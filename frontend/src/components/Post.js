import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'
const Post = ({ post }) => {
    return (
        <Col md={7}>
            <Card
                className='post-card'
                style={{ width: '100%', marginBottom: '40px' }}
            >
                <Card.Header>
                    <Card.Img variant='top' src={post.userAvatar} />
                    <h4>
                        <Link to={`/users/${post.user && post.user._id}`}>
                            {post.user && post.user.name}
                        </Link>
                    </h4>
                </Card.Header>
                <Link to={`/post/${post._id}`}>
                    <Card.Img variant='top' src={post.image} />
                </Link>
                <Card.Body>
                    <span className='post-likes'>
                        {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
                    </span>
                    <Card.Title>{post.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Post
