export interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface DrinksResponse {
  drinks: Drink[];
}
