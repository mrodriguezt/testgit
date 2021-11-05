import {BASE_URL} from '../../utils/constant';

export async function sendCotizacioninfo(data){
        const url=`${BASE_URL}/formulario-cotizaciones`
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

export async function getCotizacion(id){
    try {
        const url = `${BASE_URL}/cotizacion/${id}`;
        const reponse = await fetch(url)
        const result = await reponse.json()
        return result
    } catch (error) {
        console.log(error);
        return null;
    }
}
