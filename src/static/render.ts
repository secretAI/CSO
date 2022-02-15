import { sendFetchRequest } from "../controllers/sendreq";

const subtitles: HTMLCollection = document.getElementsByClassName("goods-subtitle");
const counts: HTMLCollection = document.getElementsByClassName("goods-count");
const prices: HTMLCollection = document.getElementsByClassName("goods-price");

async function renderProducts(): Promise<void> {
  const response = await sendFetchRequest("/goods", {});
  console.log(response);
  for(let i = 0; i < response.body.length; i++) {
    subtitles[i].innerHTML = response.body[i].title;
    counts[i].innerHTML = response.body[i].count;
    prices[i].innerHTML = response.body[i].price;
  }
}

renderProducts();
