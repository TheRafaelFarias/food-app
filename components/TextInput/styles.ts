import styled from "styled-components/native";

export const InputContainer = styled.View`
  margin-bottom: 5%;
  flex-direction: column;
`;

export const InputTitle = styled.Text`
  color: ${(props) => props.theme.colors.shadeOne};
  opacity: 0.7;
  margin-left: 5%;
  margin-bottom: 2%;
`;

export const TextInputStyled = styled.TextInput<{ halfScreen?: number }>`
  padding: 4% 5%;
  border-radius: 10px;
  width: ${(props) =>
    props.halfScreen ? props.halfScreen / 2.5 + "px" : "100%"};

  color: ${(props) => props.theme.colors.shadeTwo};
  border: ${(props) => props.theme.colors.shadeTwo};
`;
