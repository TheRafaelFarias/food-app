import { useEffect, useRef, useState } from "react";
import { EmitterSubscription, Keyboard } from "react-native";

export function useKeyboardStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const keyboardShowListener = useRef<EmitterSubscription | null>(null);
  const keyboardHideListener = useRef<EmitterSubscription | null>(null);

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setIsOpen(true);
        setKeyboardHeight(event.endCoordinates.height);
      }
    );
    keyboardHideListener.current = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsOpen(false);
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardShowListener.current?.remove();
      keyboardHideListener.current?.remove();
    };
  });

  return { isKeyboardOpen: isOpen, keyboardHeight };
}
