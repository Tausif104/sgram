// importing files
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USERS_GET_REQUEST,
    USERS_GET_SUCCESS,
    USERS_GET_FAIL,
} from '../constants/userConstants'

// user login reducer
const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGUT:
            return {}
        default:
            return state
    }
}

// user register reducer
const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// get users reducer
const getUsersReducer = (state = { userList: [] }, action) => {
    switch (action.type) {
        case USERS_GET_REQUEST:
            return { loading: true, userList: [] }
        case USERS_GET_SUCCESS:
            return { loading: false, userList: action.payload }
        case USERS_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export { userLoginReducer, userRegisterReducer, getUsersReducer }
