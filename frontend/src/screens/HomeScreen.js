import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import Post from '../components/Post'
import Spinner from '../components/Spinner'
import { listPosts } from '../actions/postActions'

const HomeScreen = ({ history }) => {
    const dispatch = useDispatch()

    const postList = useSelector((state) => state.postList)
    const { loading, error, posts } = postList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            dispatch(listPosts())
        }
    }, [dispatch, history, userInfo])

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <Row className='justify-content-center'>
                    {posts.map((post) => (
                        <Post key={post._id} post={post} />
                    ))}
                </Row>
            )}
        </div>
    )
}

export default HomeScreen
