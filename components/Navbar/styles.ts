import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;
`;

export const DeliveryContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const DeliveryText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
`;

export const AvatarImage = styled.Image`
  width: 60px;
  height: 70px;
`;
