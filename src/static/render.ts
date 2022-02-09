/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendRequest } from "../controllers/sendreq";

const subtitles: HTMLCollection = document.getElementsByClassName("goods-subtitle");
const counts: HTMLCollection = document.getElementsByClassName("goods-count");
const prices: HTMLCollection = document.getElementsByClassName("goods-price");

async function renderProducts(): Promise<void> {
  const response = await sendRequest("/goods", {});
  console.log(response);
  for(let i = 0; i < response.body.length; i++) {
    subtitles[i].innerHTML = response.body[i].title;
    counts[i].innerHTML = response.body[i].count;
    prices[i].innerHTML = response.body[i].price;
  }
}

renderProducts();
