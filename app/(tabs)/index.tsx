import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

import { CardList } from "@/components/ui/card-list";
import { useTrendingDrinks } from "@/hooks";

export default function HomeScreen() {
  const { data, isLoading, error } = useTrendingDrinks();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <div className="flex text-center">
          <Image
            source={require("@/assets/images/icon.png")}
            className="h-20 w-20"
          />
          <ThemedText className="pl-24" type="title">
            Make some pour decisions
          </ThemedText>
        </div>
      }
    >
      <ThemedView style={styles.titleContainer}></ThemedView>
      <ThemedView style={styles.stepContainer}>
        {isLoading && <ThemedText>Loading...</ThemedText>}
        {error && <ThemedText>Error: {error.message}</ThemedText>}
        {data && <CardList cardlist={data} />}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
