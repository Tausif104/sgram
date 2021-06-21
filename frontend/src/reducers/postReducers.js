// importing files
import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAIL,
    POST_DETAILS_REQUEST,
    POST_DETAILS_SUCCESS,
    POST_DETAILS_FAIL,
    POSTED_USER_REQUEST,
    POSTED_USER_SUCCESS,
    POSTED_USER_FAIL,
    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    POST_DELETE_REQUEST,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAIL,
} from '../constants/postConstants'

// post create reducer
export const postCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_CREATE_REQUEST:
            return { loading: true }
        case POST_CREATE_SUCCESS:
            return { loading: false, post: action.payload }
        case POST_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// post delete reducer
export const postDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_DELETE_REQUEST:
            return { loading: true }
        case POST_DELETE_SUCCESS:
            return { loading: false, success: true }
        case POST_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// post list reducers
export const postListReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case POST_LIST_REQUEST:
            return { loading: true, posts: [] }
        case POST_LIST_SUCCESS:
            return { loading: false, posts: action.payload }
        case POST_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// post details reducer
export const postDetailsReducer = (state = { post: {} }, action) => {
    switch (action.type) {
        case POST_DETAILS_REQUEST:
            return { loading: true, ...state }
        case POST_DETAILS_SUCCESS:
            return { loading: false, post: action.payload }
        case POST_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// user posts reducer
export const postedByUserReducer = (state = { postsUser: [] }, action) => {
    switch (action.type) {
        case POSTED_USER_REQUEST:
            return { loading: true, postsUser: [] }
        case POSTED_USER_SUCCESS:
            return { loading: false, postsUser: action.payload }
        case POSTED_USER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
