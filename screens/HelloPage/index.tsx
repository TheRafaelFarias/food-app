import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ButtonText } from "../../components/ActionButton/styles";
import { InitialPageStatusBarContainer } from "../../components/InitialPageStatusBarContainer";
import { theme } from "../../globals";
import { RootStackParamList } from "../../App";
import {
  AppPreviewImage,
  Buttons,
  Container,
  ContentContainer,
  LoginButton,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/core";

type Props = StackNavigationProp<RootStackParamList, "HelloPage">;

const HelloPage: React.FC = () => {
  const navigation = useNavigation<Props>();

  return (
    <Container>
      <KeyboardAvoidingView>
        <InitialPageStatusBarContainer />
        <ContentContainer>
          <Title>Order from your favourite stores or vendors</Title>
          <AppPreviewImage source={require("../../assets/app-preview.png")} />
          <Buttons>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("CreateAccountPage")}
            >
              <ActionButton>
                <ButtonText>Create an account</ButtonText>
              </ActionButton>
            </TouchableOpacity>
            <LoginButton
              activeOpacity={0.7}
              onPress={() => navigation.navigate("LoginPage")}
            >
              <ButtonText color={theme.colors.primary}>Login</ButtonText>
            </LoginButton>
          </Buttons>
        </ContentContainer>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default HelloPage;
