import { BASE_URL } from "../../utils/constant";

export async function getHTMLMessage(template, data) {
  try {
    const url = `${BASE_URL}/mail/${template}/${data}`;
    const response = fetch(url).then((resp) => resp.json());
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
