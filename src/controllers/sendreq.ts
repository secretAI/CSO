import fetch from "isomorphic-fetch";

export async function sendRequest(url: string, body: object): Promise<object> {
  const response: object | void = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  })
    .then((res: { json: () => object; }) => res.json())
    .catch(err => console.log(err));
  console.log(response);
  if(typeof response == "object") {
    return response;
  } else {
    console.log("Response unreceived. Try again..");
    return {};
  }
}
