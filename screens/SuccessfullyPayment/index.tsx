import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../App";
import { BackIcon, BackIconWrapper, StyledText } from "../../common";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ButtonText } from "../../components/ActionButton/styles";
import {
  Container,
  Description,
  Footer,
  PageContent,
  SuccessInformation,
  SuccessInformationMargin,
} from "./styles";

const { height } = Dimensions.get("screen");

const SuccessfullyPayment: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <BackIconWrapper>
        <BackIcon onPress={() => navigation.goBack()} />
      </BackIconWrapper>
      <PageContent>
        <SuccessInformation>
          <Image
            source={require("../../assets/success.png")}
            style={{ width: 200, height: 200 }}
          />
          <SuccessInformationMargin />
          <StyledText center>
            Your order has been successfully placed
          </StyledText>
          <SuccessInformationMargin />
          <Description>
            Sit and relax while your orders is being worked on . It’ll take 5min
            before you get it
          </Description>
        </SuccessInformation>
      </PageContent>
      <Footer>
        <TouchableOpacity
          onPress={() => {
            navigation.pop(6);
            navigation.replace("HomePage");
          }}
        >
          <ActionButton>
            <ButtonText>Go to home screen</ButtonText>
          </ActionButton>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default SuccessfullyPayment;
