import React, { useEffect, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Dimensions, Keyboard, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../App";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ButtonText } from "../../components/ActionButton/styles";
import { InitialPageStatusBarContainer } from "../../components/InitialPageStatusBarContainer";
import { TextInput } from "../../components/TextInput";
import { theme } from "../../globals";
import {
  Bottom,
  Container,
  ContentContainer,
  Description,
  Form,
  LoginButtonWrapper,
  RegisterButton,
  Title,
} from "./styles";

type Props = StackScreenProps<RootStackParamList, "LoginPage">;

const { height } = Dimensions.get("window");

const LoginPage: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardUp);
    Keyboard.addListener("keyboardDidHide", keyboardDown);

    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardUp);
      Keyboard.removeListener("keyboardDidHide", keyboardDown);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const keyboardUp = () => setKeyboardStatus(true);
  const keyboardDown = () => setKeyboardStatus(false);

  const renderLoginButton = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.replace("HomePage")}
      >
        <ActionButton>
          <ButtonText>Login to my account</ButtonText>
        </ActionButton>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <InitialPageStatusBarContainer />
      <ContentContainer>
        <View>
          <Title>Login into your account</Title>
          <Description>
            Good to see you again, enter your details below to continue
          </Description>
        </View>
        <Form>
          <TextInput
            title="Email address"
            placeholder="Enter email"
          ></TextInput>
          <TextInput title="Password" placeholder="Enter password"></TextInput>
        </Form>
        {keyboardStatus && (
          <LoginButtonWrapper>{renderLoginButton()}</LoginButtonWrapper>
        )}
        <Bottom height={Number(height.toFixed())}>
          {!keyboardStatus && renderLoginButton()}
          <RegisterButton
            onPress={() => navigation.replace("CreateAccountPage")}
          >
            <ButtonText color={theme.colors.primary}>
              Create an account
            </ButtonText>
          </RegisterButton>
        </Bottom>
      </ContentContainer>
    </Container>
  );
};

export default LoginPage;
