import { types } from "../types/types";



export const authReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.LOGIN:
            return {
                ...payload,
                logged: true
            };
        case types.LOGOUT:
            return {
                logged: false
            };
        default:
            return state;
    }
}