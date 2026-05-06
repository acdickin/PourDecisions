const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export async function fetchFromCocktailAPI<T>(
  endpoint: string,
  params?: Record<string, string>,
): Promise<T> {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}.`);
  }

  return (await response.json()) as T;
}
