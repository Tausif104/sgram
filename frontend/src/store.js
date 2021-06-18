// importing packages
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// importing files
import {
    postListReducer,
    postDetailsReducer,
    postedByUserReducer,
} from './reducers/postReducers'
import {
    userLoginReducer,
    userRegisterReducer,
    getUsersReducer,
} from './reducers/userReducers'

// combine reducers
const reducer = combineReducers({
    postList: postListReducer,
    postDetails: postDetailsReducer,
    postedByUser: postedByUserReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    getUsers: getUsersReducer,
})

// save userinfo in localstorage
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

// user initial state
const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

// thunk middleware
const middleware = [thunk]

// store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
