import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setCookie = (userDetails) => {
    cookies.set(`sessionDetails`, JSON.stringify(userDetails))
}
export const getCookie = (key) => {
    return cookies.get(key || `sessionDetails`);
}

export const isLogin = () => {
    return !!getCookie()
}