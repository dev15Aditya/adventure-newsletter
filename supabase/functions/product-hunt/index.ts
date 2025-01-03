import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();

export const fetchProductHuntData = async () => {
  const response = await fetch("https://product-hunt6.p.rapidapi.com/single-product?slug=reditus", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "product-hunt6.p.rapidapi.com",
    },
  });

  if (!response.ok) {
    console.error("Failed to fetch Product Hunt data:", response.statusText);
    return null;
  }

  const data = await response.json();
  return data;
};
