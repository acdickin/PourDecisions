import React from "react";
import { Image, Text, View } from "react-native";

import { useDrinkDetail } from "@/hooks";
import { useLocalSearchParams } from "expo-router";

export default function DrinkPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, error } = useDrinkDetail(id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const drink = data?.drinks[0];

  if (!drink) {
    return <Text>Drink not found</Text>;
  }

  console.log(drink);
  return (
    <View className="flex p-8">
      <View>
        <Text className="text-lg font-bold">{drink.strDrink}</Text>
        <Image
          className="w-80 h-80"
          source={{ uri: drink.strDrinkThumb }}
          alt={drink.idDrink}
        />
      </View>
      <View className="flex flex-col mt-4 ">
        <Text className="font-bold">Ingredients:</Text>
        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => {
          const ingredient: string | null = drink[`strIngredient${num}`];
          const measure: string | null = drink[`strMeasure${num}`];
          if (ingredient && measure) {
            return (
              <View key={num} className="flex flex-row gap-2">
                <Text>
                  {measure} {ingredient}
                </Text>
              </View>
            );
          }
          return null;
        })}
      </View>
      <View className="mt-4">
        <Text className="font-bold">Instructions:</Text>
        <Text>{drink.strInstructions}</Text>
      </View>
    </View>
  );
}
