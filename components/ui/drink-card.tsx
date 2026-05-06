import React from "react";
export interface DrinkCardProps {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}
export const DrinkCard = ({
  strDrink,
  strDrinkThumb,
  idDrink,
}: DrinkCardProps) => {
  return (
    <div className="flex justify-between p-6 border border-default rounded-lg">
      <div>
        <h2 className="text-lg font-bold">{strDrink}</h2>
      </div>
      <div>
        <img
          src={strDrinkThumb}
          alt={idDrink}
          className="w-20 h-20 rounded-full"
        />
      </div>
    </div>
  );
};
