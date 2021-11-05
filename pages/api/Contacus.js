import { BASE_URL } from '../../utils/constant';

export async function sendContactinfo(data) {
  const url = `${BASE_URL}/contactos`

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

export async function getAgencias() {
  const url = `${BASE_URL}/agencias`

  const settings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };
  try {
    const fetchResponse = await fetch(url, settings);
    const response = await fetchResponse.json();
    return response;
  } catch (e) {
    return e;
  }
}

export async function getTalleres() {
  const url = `${BASE_URL}/agencias`

  const settings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };
  try {
    const fetchResponse = await fetch(url, settings);
    const response = await fetchResponse.json();
    const res = await response.filter((taller) => {
      if (taller.taller) {
        if (taller.abierta) {
          return taller;
        }
      }
    });
    return res;
  } catch (e) {

    console.log(e);
    return null;
  }
}
export async function getCiudades() {
  const url = `${BASE_URL}/agencias`

  const settings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };
  try {
    const fetchResponse = await fetch(url, settings);
    const response = await fetchResponse.json();
    const ciudades = [];
    response.map((item) => {
      if (!ciudades.includes(item.ciudad)) {
        ciudades.push(item.ciudad)
      }
    })
    return ciudades;
  } catch (e) {
    return e;
  }
}

export async function getCiudadesForms() {
  const url = `${BASE_URL}/agencias`

  const settings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };
  try {
    const fetchResponse = await fetch(url, settings);
    const response = await fetchResponse.json();
    const ciudades = [];
    response.map((item) => {
      if (!ciudades.includes(item.ciudad)) {
        let ciudad = { nombre: item.ciudad };
        ciudades.push(ciudad)
      }
    });
    console.log({ ciudades });
    return ciudades;
  } catch (e) {
    return e;
  }
}