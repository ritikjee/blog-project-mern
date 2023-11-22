import {Cookies as cookie} from 'js-cookie';

export const setToken = (userId) => {
    cookie.set('userId', userId);
}

export const getToken = () => {
    return cookie.get('userId');
}

export const removeToken = () => {
    cookie.remove('userId');
}

export const isAuthenticated = () => {
    return !!getToken();
}