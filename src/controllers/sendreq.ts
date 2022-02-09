import fetch from "isomorphic-fetch";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendRequest(url: string, body: object): Promise<any> {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body)
  })
    .then((res: { json: () => object; }) => res.json())
    .catch(err => console.log(err));
  if(response) {
    return response;
  }
}
