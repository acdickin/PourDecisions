import { SymbolView, SymbolViewProps, SymbolWeight } from "expo-symbols";
import { StyleProp, ViewStyle } from "react-native";

const SF_MAPPING: Record<string, SymbolViewProps["name"]> = {
  "filter-alt": "line.3.horizontal.decrease",
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = "regular",
}: {
  name: SymbolViewProps["name"] | keyof typeof SF_MAPPING;
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  const resolvedName = (SF_MAPPING[name] ?? name) as SymbolViewProps["name"];
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={resolvedName}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}
