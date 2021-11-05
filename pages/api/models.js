import { BASE_URL, modelos, modelsDetails } from "../../utils/constant";
export async function getModelsApi() {
  try {
    const result = modelos;
    return result;
  } catch (error) {
    return null;
  }
}

export async function getModelos() {
  const url = `${BASE_URL}/modelos`;

  const settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, compress, br"
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

export async function getModeloSlug(slug) {
  const url = `${BASE_URL}/modelo/${slug.toLowerCase()}`;

  const settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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

export async function getModelslugApi(slug) {
  try {
    const result = modelos.find(modelo => modelo.slug == slug.toLowerCase());
    return result;
  } catch (error) {
    return null;
  }
}

export async function getCaracteristicas(id) {
  try {
    const result = modelsDetails.find(modelo => modelo.slug == id.toLowerCase());
    return result;
  } catch (error) {
    return null;
  }
}

export async function getSecciones(slug) {
  const url = `${BASE_URL}/secciones/${slug.toLowerCase()}`;

  const settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const fetchResponse = await fetch(url, settings);
    if (fetchResponse.status == 200) {
      const response = await fetchResponse.json();
      return response;
    } else {
      return null;
    }
  } catch (e) {
    return e;
  }
}


export async function getColorVersionBySlug(slug) {
  const url = `${BASE_URL}/versiones?modelo.slug_eq=${encodeURIComponent(slug)}`;

  const settings = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const fetchResponse = await fetch(url, settings);
    if (fetchResponse.status == 200) {
      const response = await fetchResponse.json();
      return response;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}
