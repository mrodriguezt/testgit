import { BASE_URL } from '../../utils/constant';

export async function sendRepuestosInfo(data) {
    const url = `${BASE_URL}/formulario-repuestos`

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: data
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const response = await fetchResponse.json();
        return response;
    } catch (e) {
        return e;
    }
}