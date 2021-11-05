import { BASE_URL } from '../../utils/constant';

export async function getBanners() {
  const url = `${BASE_URL}/banners`

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