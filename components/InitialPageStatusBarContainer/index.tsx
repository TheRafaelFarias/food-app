import React, { useEffect, useState } from "react";
import { Image, Keyboard } from "react-native";
import { StatusBarContainer } from "./styles";

export const InitialPageStatusBarContainer: React.FC = () => {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardUp);
    Keyboard.addListener("keyboardDidHide", keyboardDown);

    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardUp);
      Keyboard.removeListener("keyboardDidHide", keyboardDown);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const keyboardUp = () => setKeyboardStatus(true);

  const keyboardDown = () => setKeyboardStatus(false);

  return (
    <StatusBarContainer isKeyboardUp={keyboardStatus}>
      <Image
        style={{ width: 65, height: 45 }}
        source={require("../../assets/Logo.png")}
      />
    </StatusBarContainer>
  );
};
