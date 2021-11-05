import { BASE_URL } from '../../utils/constant';

export async function getAbout() {
    const url = `${BASE_URL}/sobre-suzukis`
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const response = await fetchResponse.json();
        return response;
    } catch (e) {
        return e;
    }
}

export async function getNoticias(start) {
    let url;
    if (start == 0) {
        url = `${BASE_URL}/noticias?_limit=10`
    }
    else {
        url = `${BASE_URL}/noticias?id_lt=${start}&_limit=10`
    }

    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const response = await fetchResponse.json();
        return response;
    } catch (e) {
        return e;
    }
}