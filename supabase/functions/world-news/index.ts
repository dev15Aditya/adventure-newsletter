import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();

export const fetchWorldNewsData = async () => {
  const response = await fetch("https://google-news13.p.rapidapi.com/business?lr=en-US", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "google-news13.p.rapidapi.com",
    },
  });

  if (!response.ok) {
    console.error("Failed to fetch Google Trends data:", response.statusText);
    return null;
  }

  const data = await response.json();
  return data;
};
