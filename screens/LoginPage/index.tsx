import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../App";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ButtonText } from "../../components/ActionButton/styles";
import { InitialPageStatusBarContainer } from "../../components/InitialPageStatusBarContainer";
import { TextInput } from "../../components/TextInput";
import { theme } from "../../globals";
import { useKeyboardStatus } from "../../hooks/useKeyboardStatus";
import {
  Bottom,
  Container,
  ContentContainer,
  Description,
  Form,
  RegisterButton,
  Title,
} from "./styles";

type Props = StackScreenProps<RootStackParamList, "LoginPage">;

const LoginPage: React.FC<Props> = ({ navigation }) => {
  const { isKeyboardOpen } = useKeyboardStatus();

  return (
    <Container>
      <InitialPageStatusBarContainer />
      <ContentContainer style={{ marginTop: isKeyboardOpen ? "10%" : "5%" }}>
        {!isKeyboardOpen && (
          <View>
            <Title>Login into your account</Title>
            <Description>
              Good to see you again, enter your details below to continue
            </Description>
          </View>
        )}
        <Form>
          <TextInput title="Email address" placeholder="Enter email" />
          <TextInput title="Password" placeholder="Enter password" />
        </Form>
      </ContentContainer>
      <Bottom>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.replace("HomePage")}
        >
          <ActionButton>
            <ButtonText>Login to my account</ButtonText>
          </ActionButton>
        </TouchableOpacity>
        {!isKeyboardOpen && (
          <RegisterButton
            onPress={() => navigation.replace("CreateAccountPage")}
          >
            <ButtonText color={theme.colors.primary}>
              Create an account
            </ButtonText>
          </RegisterButton>
        )}
      </Bottom>
    </Container>
  );
};

export default LoginPage;
