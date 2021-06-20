import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userPosts } from '../actions/postActions'
import { Row, Col, Image, Alert } from 'react-bootstrap'
import Spinner from '../components/Spinner'

const ProfileScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const postedByUser = useSelector((state) => state.postedByUser)
    const { loading, error, postsUser } = postedByUser

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }

        if (userInfo) {
            dispatch(userPosts(userInfo._id))
        }
    }, [history, userInfo, dispatch, match])

    return (
        <div>
            <h1>{userInfo && userInfo.name.split(' ')[0]}</h1>
            <p>{userInfo && userInfo.email}</p>
            <Row>
                {loading && <Spinner />}
                {error && <Alert variant='warning'></Alert>}
                {postsUser.length === 0 && (
                    <Alert variant='warning'>
                        No Posts by {userInfo && userInfo.name.split(' ')[0]}
                    </Alert>
                )}

                {postsUser.length !== 0 &&
                    postsUser.map((p) => (
                        <Col lg={4} key={p._id}>
                            <Link to={`/post/${p._id}`}>
                                <div className='post-square'>
                                    <Image src={p.image} />
                                </div>
                            </Link>
                        </Col>
                    ))}
            </Row>
        </div>
    )
}

export default ProfileScreen
