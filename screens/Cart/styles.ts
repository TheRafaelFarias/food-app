import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;

export const PageContent = styled.View`
  margin-top: 30px;
  padding: 0px 24px;
`;

export const CartItems = styled.ScrollView`
  height: 55%;
`;

export const CartItemWrapper = styled.View`
  width: 100%;
  padding: 10px 15px;
  background-color: white;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 20px;
  margin-top: 30px;
`;

export const CartItemInformations = styled.View`
  justify-content: center;
`;

export const CartItemTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
`;

export const CartItemPrice = styled.Text`
  color: ${(props) => props.theme.colors.primary};
`;

export const ChangeQuantityContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 25%;
`;

export const ChangeQuantityButtonWrapper = styled.Pressable`
  padding: 5px 10px;
  height: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.gradientRight};
`;

export const ChangeQuantityButton = styled.Text`
  color: white;
`;

export const QuantityText = styled.Text`
  color: ${(props) => props.theme.colors.text};
`;

export const TotalPriceContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 20%;
  flex-direction: row;
`;

export const TotalPriceText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
`;

export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
`;

export const Footer = styled.View<{ height: number }>`
  align-items: center;
  position: absolute;
  top: ${(props) => props.height - props.height * 0.26}px;
  bottom: 0;
  left: 0;
  right: 0;
`;
