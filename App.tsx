import React from "react";
import AddToCart from "./screens/AddToCart";
import Cart from "./screens/Cart";
import CreateAccountPage from "./screens/CreateAccountPage";
import FinishOrder from "./screens/FinishOrder";
import HelloPage from "./screens/HelloPage";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import CardInformations from "./screens/CardInformations";
import SuccessfullyPayment from "./screens/SuccessfullyPayment";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { ICategoryData } from "./data";
import { theme } from "./globals";

export type RootStackParamList = {
  HelloPage: undefined;
  CreateAccountPage: undefined;
  LoginPage: undefined;
  HomePage: undefined;
  AddToCart: {
    data: ICategoryData;
  };
  Cart: undefined;
  FinishOrder: undefined;
  CardInformations: undefined;
  SuccessfullyPayment: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.background}
        />
        <Stack.Navigator
          initialRouteName="HelloPage"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HelloPage" component={HelloPage} />
          <Stack.Screen
            name="CreateAccountPage"
            component={CreateAccountPage}
          />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="AddToCart" component={AddToCart} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="FinishOrder" component={FinishOrder} />
          <Stack.Screen name="CardInformations" component={CardInformations} />
          <Stack.Screen
            name="SuccessfullyPayment"
            component={SuccessfullyPayment}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
