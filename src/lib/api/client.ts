import { REVALIDATE_SECONDS } from "../constants";

const BASE_URL = process.env.MENU_API_BASE_URL;

export async function fetchJSON<T>(path: string): Promise<T> {
  if (!BASE_URL) {
    throw new Error(
      "MENU_API_BASE_URL is not configured. See .env.example for setup instructions.",
    );
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(
      `Menu data request failed with status ${response.status} for "${path}".`,
    );
  }

  return response.json() as Promise<T>;
}
