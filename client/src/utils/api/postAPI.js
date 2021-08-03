import { myAxios } from '../checkToken';
import { checkExpiredToken } from '../checkToken';
export const postStatus = async (status) => {
    const { data } = await myAxios({ method: 'post', url: 'http://localhost:3030/post/', data: status });

    return data;
}

export const getStatus = async () => {
    await checkExpiredToken();
    const { data } = await myAxios({ url: 'http://localhost:3030/post/user/1' });
    return data;
}

export const likePost = async (info) => {
    const { data } = await myAxios.post('http://localhost:3030/post/like', info);
    return data;
}