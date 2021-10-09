import React from "react";
import { Image, Keyboard } from "react-native";
import { useKeyboardStatus } from "../../hooks/useKeyboardStatus";
import { StatusBarContainer } from "./styles";

export const InitialPageStatusBarContainer: React.FC = () => {
  const { isKeyboardOpen } = useKeyboardStatus()

  return (
    <StatusBarContainer isKeyboardUp={isKeyboardOpen}>
      <Image
        style={{ width: 65, height: 45 }}
        source={require("../../assets/Logo.png")}
      />
    </StatusBarContainer>
  );
};
