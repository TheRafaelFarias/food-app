import React from "react";
import { theme } from "../../globals";
import { InputContainer, InputTitle, TextInputStyled } from "./styles";

export const TextInput: React.FC<{
  title: string;
  placeholder: string;
}> = ({ title, placeholder }) => {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <TextInputStyled
        placeholder={placeholder}
        placeholderTextColor={theme.colors.shadeThree}
        selectionColor={theme.colors.shadeThree}
        underlineColorAndroid="#FFFFFF"
      />
    </InputContainer>
  );
};
