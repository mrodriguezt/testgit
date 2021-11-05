import { BASE_URL } from '../../utils/constant';

export async function getLoQuiero() {
  const url = `${BASE_URL}/lo-quieros`
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