import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, Pressable, View } from "react-native";
import { RootStackParamList } from "../../App";
import { BackIcon, StyledText } from "../../common";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ButtonText } from "../../components/ActionButton/styles";
import { TextInput } from "../../components/TextInput";
import {
  InputContainer,
  InputTitle,
  TextInputStyled,
} from "../../components/TextInput/styles";
import { theme } from "../../globals";
import { BackIconWrapper, Container, Footer, PageContent } from "./styles";

const { height, width } = Dimensions.get("screen");

const CardInformations: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <BackIconWrapper>
        <BackIcon onPress={() => navigation.goBack()} />
      </BackIconWrapper>
      <PageContent>
        <StyledText>Payment</StyledText>
        <TextInput title="Card details" placeholder="Enter card details" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <InputContainer>
            <InputTitle>Exp date</InputTitle>
            <TextInputStyled
              halfScreen={Number(width.toFixed())}
              placeholder="DD/MM"
              placeholderTextColor={theme.colors.shadeThree}
              selectionColor={theme.colors.shadeThree}
              underlineColorAndroid="#FFFFFF"
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>CVV</InputTitle>
            <TextInputStyled
              halfScreen={Number(width.toFixed())}
              placeholder="Enter CVV"
              placeholderTextColor={theme.colors.shadeThree}
              selectionColor={theme.colors.shadeThree}
              underlineColorAndroid="#FFFFFF"
            />
          </InputContainer>
        </View>
      </PageContent>
      <Footer>
        <Pressable onPress={() => navigation.push("SuccessfullyPayment")}>
          <ActionButton>
            <ButtonText>Next step</ButtonText>
          </ActionButton>
        </Pressable>
      </Footer>
    </Container>
  );
};

export default CardInformations;
