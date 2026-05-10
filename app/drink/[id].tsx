import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Badge } from "@/components/ui/badge";
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
    <ScrollView contentContainerClassName="flex flex-col gap-8 p-4">
      <View className="flex flex-col items-center gap-8">
        <ThemedText className="text-xl" type="title">
          {drink.strDrink}
        </ThemedText>
        <Image
          className="w-80 h-80"
          source={{ uri: drink.strDrinkThumb }}
          alt={drink.idDrink}
        />
      </View>
      <View className="flex flex-row gap-2">
        <Badge text={drink.strGlass} color="blue" />
        <Badge text={drink.strAlcoholic} color="orange" />
      </View>
      <View className="flex flex-col gap-2">
        <ThemedText type="subtitle">Ingredients:</ThemedText>
        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => {
          const ingredient: string | null = drink[`strIngredient${num}`];
          const measure: string | null = drink[`strMeasure${num}`];
          if (ingredient && measure) {
            return (
              <View key={num} className="flex flex-row gap-4">
                <Text className="text-lg">
                  {measure} {ingredient}
                </Text>
              </View>
            );
          }
          return null;
        })}
      </View>
      <View className="flex flex-col gap-2">
        <ThemedText type="subtitle">Instructions:</ThemedText>
        <Text className="text-lg">{drink.strInstructions}</Text>
      </View>
    </ScrollView>
  );
}
