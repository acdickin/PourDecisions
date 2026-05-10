import React from "react";

export type BadgeColor =
  | "lime"
  | "red"
  | "blue"
  | "yellow"
  | "purple"
  | "pink"
  | "orange"
  | "gray";

const COLOR_CLASSES: Record<BadgeColor, string> = {
  lime: "bg-lime-600",
  red: "bg-red-600",
  blue: "bg-blue-600",
  yellow: "bg-yellow-500",
  purple: "bg-purple-600",
  pink: "bg-pink-600",
  orange: "bg-orange-600",
  gray: "bg-gray-600",
};

export const Badge = ({
  text,
  color = "lime",
}: {
  text: string;
  color?: BadgeColor;
}) => {
  return (
    <div
      className={`white border color-primary text-white w-32 text-center ${COLOR_CLASSES[color]} rounded-full px-2 py-1 text-sm`}
    >
      {text}
    </div>
  );
};
