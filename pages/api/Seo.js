import { BASE_URL } from '../../utils/constant';
export default async function Seo(path) {
    if (!path) {
        return null;
    }
    const url = `${BASE_URL}/paginas-seos?Url=${encodeURIComponent(path)}`;
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        console.log('path:', path);
        console.log(url);
        const fetchResponse = await fetch(url, settings);
        const response = await fetchResponse.json();
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }

}
