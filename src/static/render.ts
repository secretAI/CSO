/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendRequest } from "../controllers/sendreq";

const jTitle = document.getElementById("jTitle");
const jCount = document.getElementById("jCount");
const jPrice = document.getElementById("jPrice");

const mTitle = document.getElementById("mTitle");
const mCount = document.getElementById("mCount");
const mPrice = document.getElementById("mPrice");

const sTitle = document.getElementById("sTitle");
const sCount = document.getElementById("sCount");
const sPrice = document.getElementById("sPrice");

export async function renderData(): Promise<void> {
  const jResponse: any = await sendRequest("/goods", {title: "Junior Box"});
  if(jTitle && jCount && jPrice) {
    jTitle.innerText = jResponse.title;
    jCount.innerText = jResponse.count;
    jPrice.innerText = jResponse.price;
  }
  const mResponse: any = await sendRequest("/goods", {title: "Middle Box"});
  if (mTitle && mCount && mPrice) {
    mTitle.innerText = mResponse.title;
    mCount.innerText = mResponse.count;
    mPrice.innerText = mResponse.price;
  }
  const sResponse: any = await sendRequest("/goods", {title: "Senior Box"});
  if (sTitle && sCount && sPrice) {
    sTitle.innerText = sResponse.title;
    sCount.innerText = sResponse.count;
    sPrice.innerText = sResponse.price;
  }
}
