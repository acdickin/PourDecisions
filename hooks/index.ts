import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { DrinksResponse } from "../types/drinks";
import { fetchFromCocktailAPI } from "./fetch";

export function useTrendingDrinks(): UseQueryResult<DrinksResponse, Error> {
  return useQuery({
    queryKey: ["trendingDrinks"],
    queryFn: () =>
      fetchFromCocktailAPI<DrinksResponse>("filter.php", {
        c: "Ordinary_Drink",
      }),
  });
}
