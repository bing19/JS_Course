import { AUTH_SIGN_UP, AUTH_ERROR } from "./types";

export const signUp = (data) => {
    return async (dispatch) => {
        try {
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
                mode: 'cors',
            };
            console.log('[ActionCreator] signUp called');
            const res = await fetch('http://localhost:3001/signup', options).then(res => res.json());
            if(res.error) throw new Error(res.error);
            console.log(res);
            console.log('[ActionCreator] dispatched called');

            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.token
            });

            localStorage.setItem('JWT_TOKEN', res.token);

        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email already in use'
            });
            console.error('err', err);
        }
    }
}