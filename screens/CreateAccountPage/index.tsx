import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
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
  LoginButton,
  Title,
} from "./styles";

type Props = StackNavigationProp<RootStackParamList, "CreateAccountPage">;

const CreateAccountPage: React.FC = () => {
  const navigation = useNavigation<Props>();
  const { isKeyboardOpen } = useKeyboardStatus();

  return (
    <Container>
      <InitialPageStatusBarContainer />
      <ContentContainer>
        {!isKeyboardOpen && (
          <View>
            <Title>Create an account</Title>
            <Description>
              Welcome friend, enter your details so lets get started in ordering
              food.
            </Description>
          </View>
        )}
        <Form>
          <TextInput title="Email Address" placeholder="Enter email" />
          <TextInput title="Password" placeholder="Enter password" />
          <TextInput title="Confirm password" placeholder="Confirm password" />
        </Form>
      </ContentContainer>
      <Bottom>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.replace("HomePage")}
        >
          <ActionButton onPress={() => navigation.replace("HomePage")}>
            <ButtonText>Create an account</ButtonText>
          </ActionButton>
        </TouchableOpacity>
        {!isKeyboardOpen && (
          <LoginButton onPress={() => navigation.replace("LoginPage")}>
            <ButtonText color={theme.colors.primary}>
              Login to my account
            </ButtonText>
          </LoginButton>
        )}
      </Bottom>
    </Container>
  );
};

export default CreateAccountPage;
