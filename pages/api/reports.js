import { BASE_URL } from "../../utils/constant";

export async function getHTML(id) {
  try {
    const url = `${BASE_URL}/cotizacion/${id}`;
    const response = fetch(url).then((resp) => resp.json());
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
