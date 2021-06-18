import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Table, Alert, Badge } from 'react-bootstrap'
import { users } from '../actions/userActions'
import Spinner from '../components/Spinner'

const UsersScreen = ({ history }) => {
    const dispatch = useDispatch()

    const getUsers = useSelector((state) => state.getUsers)
    const { loading, error, userList } = getUsers

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            dispatch(users())
        } else {
            history.push('/login')
        }
    }, [dispatch, userInfo, history])

    return (
        <div>
            <h1 className='heading'>Users</h1>
            {loading && <Spinner />}
            {error && <Alert variant='warning' />}
            {userList && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th className='text-center'>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((user, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user._id}</td>
                                <td className='text-center'>
                                    {user.isAdmin === true ? (
                                        <Badge variant='success'>Admin</Badge>
                                    ) : (
                                        <Badge variant='secondary'>User</Badge>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default UsersScreen
