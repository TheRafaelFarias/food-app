import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef } from "react";
import {
  Animated,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { RootStackParamList } from "../../App";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ButtonText } from "../../components/ActionButton/styles";
import { InitialPageStatusBarContainer } from "../../components/InitialPageStatusBarContainer";
import { theme } from "../../globals";
import {
  AppPreviewImage,
  Buttons,
  Container,
  ContentContainer,
  LoginButton,
  Title,
} from "./styles";

type Props = StackNavigationProp<RootStackParamList, "HelloPage">;

const Images = [
  require("../../assets/AppPreview/app-preview.png"),
  require("../../assets/DeliveryGuy/delivery-guy.png"),
  require("../../assets/PlatesWithFood/plates-with-food.png"),
];

const HelloPage: React.FC = () => {
  const window = useWindowDimensions();
  const navigation = useNavigation<Props>();

  const scrollX = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = 300;

  return (
    <Container>
      <KeyboardAvoidingView>
        <InitialPageStatusBarContainer />
        <ContentContainer>
          <Title style={{ marginTop: "10%" }}>
            Order from your favourite stores or vendors
          </Title>
          <Animated.ScrollView
            horizontal
            bounces={false}
            decelerationRate="fast"
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_SIZE}
            snapToAlignment="start"
            style={{ width: "100%" }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            contentContainerStyle={{
              width: window.width * 2.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {Images.map((image, index) => {
              const inputRange = [
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
                (index + 1) * ITEM_SIZE,
              ];

              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
              });

              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.6, 1, 0.6],
              });

              return (
                <Animated.View
                  key={index}
                  style={{ opacity: opacity, transform: [{ scale: scale }] }}
                >
                  <AppPreviewImage>
                    <Image
                      source={image}
                      style={{ height: ITEM_SIZE, width: ITEM_SIZE }}
                      height={ITEM_SIZE}
                      width={ITEM_SIZE}
                    />
                  </AppPreviewImage>
                </Animated.View>
              );
            })}
          </Animated.ScrollView>
          <Animated.ScrollView
            horizontal
            style={{ width: "20%" }}
            contentContainerStyle={{
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            {Images.map((_, index) => {
              const inputRange = [
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
                (index + 1) * ITEM_SIZE,
              ];

              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.5, 1, 0.5],
                extrapolate: "clamp",
              });

              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.8, 1, 0.8],
                extrapolate: "clamp",
              });

              const color = scrollX.interpolate({
                inputRange,
                outputRange: ["#C4C4C4", "#0B735F", "#C4C4C4"],
                extrapolate: "clamp",
              });

              return (
                <Animated.View
                  key={index}
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: 50,
                    backgroundColor: color,
                    opacity: opacity,
                    transform: [{ scale: scale }],
                  }}
                />
              );
            })}
          </Animated.ScrollView>
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
