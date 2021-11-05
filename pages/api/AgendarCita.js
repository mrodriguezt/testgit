import {BASE_URL} from '../../utils/constant';

export async function sendAgendarCita(data){
        const url=`${BASE_URL}/formulario-citas`
        const settings = {//
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

export async function sendAgendarCitaTaller(data){
    const url=`${BASE_URL}/formulario-taller`
    const settings = {//
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