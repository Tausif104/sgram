// importing packages
import axios from 'axios'

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
} from '../constants/postConstants'

// create post action
export const createPost = (title, image) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(
            '/api/posts',
            { title, image },
            config
        )

        dispatch({
            type: POST_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: POST_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// get all posts action
export const listPosts = () => async (dispatch) => {
    try {
        dispatch({ type: POST_LIST_REQUEST })
        const { data } = await axios.get('/api/posts')

        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: POST_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// get details post action
export const detailsPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: POST_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/posts/${id}`)

        dispatch({
            type: POST_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: POST_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// get posts by users
export const userPosts = (user) => async (dispatch) => {
    try {
        dispatch({
            type: POSTED_USER_REQUEST,
        })

        const { data } = await axios.get(`/api/users/profile/posted/${user}`)

        dispatch({
            type: POSTED_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: POSTED_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
