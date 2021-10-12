import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Dimensions, Image, Pressable } from "react-native";
import { RootStackParamList } from "../../App";
import { StyledText } from "../../common";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ButtonText } from "../../components/ActionButton/styles";
import Navbar from "../../components/Navbar";
import {
  CartItemInformations,
  CartItemPrice,
  CartItems,
  CartItemTitle,
  CartItemWrapper,
  ChangeQuantityButton,
  ChangeQuantityButtonWrapper,
  ChangeQuantityContainer,
  Container,
  Footer,
  PageContent,
  QuantityText,
  TotalPrice,
  TotalPriceContainer,
  TotalPriceText,
} from "./styles";

const { height } = Dimensions.get("screen");

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (type: "increment" | "decrement") => {
    if (type == "decrement") {
      if (quantity - 1 <= 0) return;

      setQuantity(quantity - 1);
      return;
    }

    setQuantity(quantity + 1);
  };

  return (
    <CartItemWrapper>
      <Image
        source={{
          uri: "https://ibassets.com.br/ib.item.image.big/b-871c999d61a24fda99ab93bdcced7730.png",
        }}
        style={{ width: 75, height: 75 }}
      />
      <CartItemInformations>
        <CartItemTitle>The McDonalds</CartItemTitle>
        <CartItemPrice>$23.99</CartItemPrice>
      </CartItemInformations>
      <ChangeQuantityContainer>
        <ChangeQuantityButtonWrapper
          onPress={() => changeQuantity("decrement")}
        >
          <ChangeQuantityButton>-</ChangeQuantityButton>
        </ChangeQuantityButtonWrapper>
        <QuantityText>{quantity}</QuantityText>
        <ChangeQuantityButtonWrapper
          onPress={() => changeQuantity("increment")}
        >
          <ChangeQuantityButton>+</ChangeQuantityButton>
        </ChangeQuantityButtonWrapper>
      </ChangeQuantityContainer>
    </CartItemWrapper>
  );
};

const Cart: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <Navbar buttonType="back" />
      <PageContent>
        <StyledText>Your Cart</StyledText>
        <CartItems contentContainerStyle={{ alignItems: "center" }}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </CartItems>
        <TotalPriceContainer>
          <TotalPriceText>Total:</TotalPriceText>
          <TotalPrice>$356</TotalPrice>
        </TotalPriceContainer>
      </PageContent>
      <Footer>
        <Pressable onPress={() => navigation.push("FinishOrder")}>
          <ActionButton>
            <ButtonText>Next step</ButtonText>
          </ActionButton>
        </Pressable>
      </Footer>
    </Container>
  );
};

export default Cart;
