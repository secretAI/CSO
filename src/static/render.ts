import { sendRequest } from "../controllers/sendreq";

const title = document.getElementById("title");
const count = document.querySelectorAll("");
const price = document.getElementById("price");

export async function renderData(): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any = await sendRequest("/", {"title": "Junior Box"});
  if(title && count && price) {
    title.innerText = response.title;
    count.innerText = response.count;
    price.innerText = response.price;
  }
}
