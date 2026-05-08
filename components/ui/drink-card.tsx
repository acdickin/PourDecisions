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
      <View className="flex justify-between p-6 border border-default rounded-lg bg-slate-50 dark:bg-slate-600">
        <View>
          <Text className="text-lg font-bold">{strDrink}</Text>
        </View>
        <View>
          <Image
            source={{ uri: strDrinkThumb }}
            alt={idDrink}
            className="w-20 h-20 rounded-full"
          />
        </View>
      </View>
    </Link>
  );
};
