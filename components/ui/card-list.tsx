import { Drink, DrinksResponse } from "@/types/drinks";
import React from "react";
import { DrinkCard } from "./drink-card";

interface CardListProps {
  cardlist: DrinksResponse;
}

export const CardList = ({ cardlist }: CardListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {cardlist.drinks.map((item: Drink) => (
        <DrinkCard {...item} key={item.idDrink} />
      ))}
    </div>
  );
};
