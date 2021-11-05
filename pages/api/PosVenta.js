import { BASE_URL } from '../../utils/constant';
export async function getRepuestos() {
    const url = `${BASE_URL}/repuestos`;
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const response = await fetchResponse.json();
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getPlanesMantenimiento() {
    const url = `${BASE_URL}/planes-de-mantenimientos`;
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const response = await fetchResponse.json();
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }

}

export async function getContenido() {
    const url = `${BASE_URL}/posventas`;
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const response = await fetchResponse.json();
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }

}

export async function getServicios() {
    const url = `${BASE_URL}/posventa-servicios`;
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const fetchResponse = await fetch(url, settings);
        const response = await fetchResponse.json();
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }

}