import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

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
    <Link href={`/drink/${idDrink}`} className="no-underline">
      <View className="flex flex-row justify-between gap-6  items-center p-6 border border-default rounded-md bg-white dark:bg-slate-600">
        <Text className="text-base md:text-3xl font-bold break-words text-default dark:text-white">
          {strDrink}
        </Text>

        <Image
          source={{ uri: strDrinkThumb }}
          alt={idDrink}
          className="w-28 h-28 md:w-40 md:h-40 rounded-2xl "
        />
      </View>
    </Link>
  );
};
