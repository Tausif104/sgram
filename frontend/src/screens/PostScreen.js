import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image } from 'react-bootstrap'
import Spinner from '../components/Spinner'
import { detailsPost } from '../actions/postActions'

const PostScreen = ({ match, history }) => {
    const dispatch = useDispatch()

    const postDetails = useSelector((state) => state.postDetails)
    const { loading, error, post } = postDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            dispatch(detailsPost(match.params.id))
        }
    }, [match, dispatch, history, userInfo])

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <Row>
                    <Col md={7}>
                        <div className='postscreen-image'>
                            <Image rounded src={post.image} />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className='post-screen-content'>
                            <div className='post-screen-meta d-flex align-items-center'>
                                <Image roundedCircle src={post.userAvatar} />
                                <h4>{post.name}</h4>
                            </div>
                            <h2>{post.title}</h2>
                            <p className='likes'>
                                {post.likes}{' '}
                                {post.likes === 1 ? 'Like' : 'Likes'}
                            </p>
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default PostScreen
