import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();

export const fetchGoogleTrendsData = async () => {
  const response = await fetch("", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "<google-trends-host>",
    },
  });

  if (!response.ok) {
    console.error("Failed to fetch Google Trends data:", response.statusText);
    return null;
  }

  const data = await response.json();
  return data;
};
