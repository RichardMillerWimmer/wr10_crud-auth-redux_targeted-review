const initialState = {
    user: null,
}

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_SESSION = 'GET_SESSION';

export function registerUser(userObj) {
    return {
        type: REGISTER_USER,
        payload: userObj
    }
}

export function loginUser(userObj) {
    return {
        type: LOGIN_USER,
        payload: userObj
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}

export function getSession(userObj) {
    return {
        type: GET_SESSION,
        payload: userObj
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, user: action.payload }
        case LOGIN_USER:
            return { ...state, user: action.payload }
        case LOGOUT_USER:
            return initialState
        case GET_SESSION:
            return { ...state, user: action.payload }
        default: return state
    }
}