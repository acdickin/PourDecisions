import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { Drink, DrinksResponse } from "../types/drinks";
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

export function useDrinkDetail(id: string): UseQueryResult<Drink[], Error> {
  return useQuery({
    queryKey: ["drinkDetail", id],
    queryFn: () =>
      fetchFromCocktailAPI<Drink[]>("lookup.php", {
        i: id,
      }),
  });
}

export function useSearchDrinks(
  query: string,
): UseQueryResult<DrinksResponse, Error> {
  return useQuery({
    queryKey: ["searchDrinks", query],
    queryFn: () =>
      fetchFromCocktailAPI<DrinksResponse>("search.php", {
        s: query,
      }),
    enabled: query.length > 0,
  });
}
