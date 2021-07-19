import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Button = styled(LinearGradient)<{ screenSize: number }>`
  border-radius: 20px;
  align-items: center;
  padding: 15px 20px;
  width: ${(props) => props.screenSize - props.screenSize * 0.1}px;
  justify-content: center;
`;

export const ButtonText = styled.Text<{
  color?: string;
}>`
  font-weight: bold;
  text-align: center;

  color: ${(props) => (props.color ? props.color : "white")};
`;
