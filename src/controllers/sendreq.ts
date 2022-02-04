import fetch from "isomorphic-fetch";

export async function sendRequest(url: string, body: object): Promise<object> {
  const response: object = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  }).then((res: { json: () => object; }) => res.json());
  console.log(response);
  return response;
}
