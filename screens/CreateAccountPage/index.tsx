import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RootStackParamList } from "../../App";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ButtonText } from "../../components/ActionButton/styles";
import { InitialPageStatusBarContainer } from "../../components/InitialPageStatusBarContainer";
import { TextInput } from "../../components/TextInput";
import { theme } from "../../globals";
import {
  Container,
  Title,
  Description,
  ContentContainer,
  Form,
  LoginButton,
  Bottom,
} from "./styles";

type Props = StackNavigationProp<RootStackParamList, "CreateAccountPage">;

const CreateAccountPage: React.FC = () => {
  const navigation = useNavigation<Props>();

  return (
    <Container>
      <ScrollView>
        <InitialPageStatusBarContainer />
        <ContentContainer>
          <View>
            <Title>Create an account</Title>
            <Description>
              Welcome friend, enter your details so lets get started in ordering
              food.
            </Description>
          </View>
          <Form>
            <TextInput title="Email Address" placeholder="Enter email" />
            <TextInput title="Password" placeholder="Enter password" />
            <TextInput
              title="Confirm password"
              placeholder="Confirm password"
            />
          </Form>
          <Bottom>
            <TouchableOpacity>
              <ActionButton onPress={() => navigation.replace("HomePage")}>
                <ButtonText>Create an account</ButtonText>
              </ActionButton>
            </TouchableOpacity>
            <LoginButton onPress={() => navigation.replace("LoginPage")}>
              <ButtonText color={theme.colors.primary}>
                Login to my account
              </ButtonText>
            </LoginButton>
          </Bottom>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
};

export default CreateAccountPage;
