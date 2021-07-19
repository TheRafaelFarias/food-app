import styled from "styled-components/native";

export const StatusBarContainer = styled.View<{ isKeyboardUp: boolean }>`
  margin-top: ${(props) => (props.isKeyboardUp ? "5%" : "10%")};
  flex-direction: row;
  justify-content: center;
`;
