import axios from "axios"
import jwt_decode from "jwt-decode";

export const checkExpiredToken = async () => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken")
    if (token) {
        const expiredIn = jwt_decode(token).exp;
        const currentDate = Math.trunc(Date.now() / 1000);
        if ((expiredIn - currentDate) < 0) {
            try {
                const { data } = await refreshUserToken(refreshToken)
                localStorage.setItem('token', data.accessToken)
            } catch (e) {
                //
            }

        }
    } else {
        //
    }
}

export const myAxios = ({ method = 'get', url, data }) => {
    const token = localStorage.getItem("token");
    const headers = { 'Authorization': `bearer ${token}` };
    return axios({
        method: method,
        url: url,
        data: data,
        headers: headers
    })
}

const refreshUserToken = async (refreshToken) => {
    return await myAxios({ method: 'post', url: 'http://localhost:3030/user/token', data: { refreshToken } })
}
