import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import UsersScreen from './screens/UsersScreen'
import CreatePostScreen from './screens/CreatePostScreen'
import Header from './components/Header'

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Route path='/' exact component={HomeScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/signup' component={SignupScreen} />
                    <Route path='/post/:id' component={PostScreen} />
                    <Route
                        path='/users/:user'
                        component={ProfileScreen}
                        exact
                    />
                    <Route path='/users' component={UsersScreen} exact />
                    <Route path='/create' component={CreatePostScreen} exact />
                </Container>
            </main>
        </Router>
    )
}

export default App
