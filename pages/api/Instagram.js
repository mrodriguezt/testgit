import { BASE_URL } from '../../utils/constant';

export async function getDatesInstagram() {
  const url = `${BASE_URL}/graph-apis`
  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {

    try {//Hace la petición al api de Instagram
      const credentials = await getCredentialsInstagram();
      const url_alternative = `${credentials.api_instagram_url + credentials.token}`;
      
      const fetchResponse = await fetch(url_alternative, settings);
      const response = await fetchResponse.json();
      return response;

    } catch (e) {//Si falla se hace la petición al Backend
      try{
        const fetchResponse = await fetch(url, settings);
        if (fetchResponse.status == 200) {
          const response = await fetchResponse.json();
          return response.content;
        }
        return false;//Retorna false para no renderizar el componente
      }catch (e){
        return false;
      }

    }

  } catch (e) {
    return false;
  }
}

async function getCredentialsInstagram() {
  const url = `${BASE_URL}/instagram`
  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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

async function fillInstagramPost() {
  const url = `${BASE_URL}/fillpost`
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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