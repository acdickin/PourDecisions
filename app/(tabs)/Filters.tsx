import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { CardList } from "@/components/ui/card-list";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { useSearchDrinks } from "../../hooks";
export default function FiltersScreen() {
  const [search, setSearch] = useState("");
  const handleSearch = (text: string) => {
    setSearch(text);
  };
  const { data, error, isLoading } = useSearchDrinks(search);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <div className="flex flex-row items-center justify-around gap-8 p-4">
          <Image
            source={require("@/assets/images/icon.png")}
            className="h-20 w-20"
          />
          <ThemedText className="" type="title">
            Make Pour Decisions
          </ThemedText>
        </div>
      }
    >
      <TextInput
        className="mx-4 mb-4 rounded-lg border border-gray-300 bg-white px-4 py-2"
        placeholder="Search here..."
        value={search}
        onChangeText={handleSearch}
      />
      {isLoading && <ThemedText>Loading...</ThemedText>}
      {error && <ThemedText>Error: {error.message}</ThemedText>}
      {data?.drinks ? (
        data.drinks.map((drink) => (
          <CardList key={drink.idDrink} cardlist={{ drinks: [drink] }} />
        ))
      ) : (
        <ThemedText>No drinks found.</ThemedText>
      )}
    </ParallaxScrollView>
  );
}
