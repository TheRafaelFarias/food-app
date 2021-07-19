import React from "react";
import { Dimensions, PressableProps } from "react-native";
import { theme } from "../../globals";
import { Button } from "./styles";

const { width } = Dimensions.get("screen");

export const ActionButton: React.FC<PressableProps> = (props) => {
  return (
    <Button
      colors={[theme.colors.gradientLeft, theme.colors.gradientRight]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      screenSize={Number(width.toFixed())}
    >
      {props.children}
    </Button>
  );
};
