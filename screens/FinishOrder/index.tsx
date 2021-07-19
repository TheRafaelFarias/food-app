import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Dimensions, Image, Pressable } from "react-native";
import { RootStackParamList } from "../../App";
import { BackIcon, StyledText, BackIconWrapper } from "../../common";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ButtonText } from "../../components/ActionButton/styles";
import {
  Container,
  PageContent,
  InformationsContainer,
  InformationText,
  ChangeButton,
  PaymentMethods,
  PaymentMethodOption,
  PaymentTitle,
  Footer,
  PriceText,
  FooterInformationsContainer,
  TotalContainer,
  PaymentMethodOptionWrapper,
} from "./styles";

const { height } = Dimensions.get("screen");

const FinishOrder: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [paymentMethod, setPaymentMethod] =
    useState<"mastercard" | "paypal" | "stripe">();

  return (
    <Container>
      <BackIconWrapper>
        <BackIcon onPress={() => navigation.goBack()} />
      </BackIconWrapper>
      <PageContent>
        <StyledText>Delivery Method</StyledText>
        <InformationsContainer>
          <InformationText setWidth hasMargin>
            1600 Pennsylvania Ave NW, Washington, DC 20500-0003
          </InformationText>
          <ChangeButton>Change</ChangeButton>
        </InformationsContainer>
        <InformationsContainer>
          <InformationText hasMargin>+234 9011039271</InformationText>
          <ChangeButton>Change</ChangeButton>
        </InformationsContainer>
        <PaymentTitle>Payment</PaymentTitle>
        <PaymentMethods>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/plus-icon.png")}
          />
          <PaymentMethodOptionWrapper
            onPress={() => setPaymentMethod("mastercard")}
            selected={paymentMethod == "mastercard"}
          >
            <PaymentMethodOption
              style={{ width: 60, height: 110 }}
              source={require("../../assets/mastercard.png")}
            />
          </PaymentMethodOptionWrapper>
          <PaymentMethodOptionWrapper
            onPress={() => setPaymentMethod("paypal")}
            selected={paymentMethod == "paypal"}
          >
            <PaymentMethodOption
              style={{ width: 60, height: 110 }}
              resizeMode="cover"
              source={require("../../assets/Paypal.png")}
            />
          </PaymentMethodOptionWrapper>
          <PaymentMethodOptionWrapper
            onPress={() => setPaymentMethod("stripe")}
            selected={paymentMethod == "stripe"}
          >
            <PaymentMethodOption
              style={{ width: 60, height: 110 }}
              resizeMode="cover"
              source={require("../../assets/Stripe.png")}
            />
          </PaymentMethodOptionWrapper>
        </PaymentMethods>
        <Footer height={Number(height.toFixed())}>
          <FooterInformationsContainer>
            <InformationsContainer>
              <InformationText setWidth>Delivery fee:</InformationText>
              <PriceText>$20</PriceText>
            </InformationsContainer>
            <InformationsContainer>
              <InformationText setWidth>Subtotal:</InformationText>
              <PriceText>$360</PriceText>
            </InformationsContainer>
            <TotalContainer>
              <InformationText>Total:</InformationText>
              <PriceText>$380</PriceText>
            </TotalContainer>
          </FooterInformationsContainer>
          <Pressable onPress={() => navigation.push("CardInformations")}>
            <ActionButton>
              <ButtonText>Finish order</ButtonText>
            </ActionButton>
          </Pressable>
        </Footer>
      </PageContent>
    </Container>
  );
};

export default FinishOrder;
