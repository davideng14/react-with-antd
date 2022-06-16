import { API_URL } from './config';

const fetchJson = (requestData) => {
    return fetch(requestData).then(res => ({ ok: res.ok, data: res.json() }))
}

const fetchUserInformation = async ({username}) => {
    
    return fetchJson(`${API_URL}/bios/${username}`).then( res => {
        if (res.ok) {
            return res.data;
        } else {
            throw new Error(`There was an error fetching user information`);
        }
    });
    
}

export { fetchUserInformation }