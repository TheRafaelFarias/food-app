import React, { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Dimensions, Image, Pressable, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { RootStackParamList } from "../../App";
import { StyledText } from "../../common";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { ButtonText } from "../../components/ActionButton/styles";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../globals";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Container,
  PageContent,
  FoodOptionImageWrapper,
  FoodOptionDescription,
  Footer,
  FoodInformations,
  FoodInformation,
  CounterButtonContainer,
  CounterButtonWrapper,
  CounterButtonText,
  TappingsContainer,
  TappingsOption,
  TappingsOptionText,
  TappingsOptions,
} from "./styles";
import Navbar from "../../components/Navbar";

const { height } = Dimensions.get("screen");

const CounterButton = () => {
  const [counter, setCounter] = useState(1);

  const updateCounter = (type: "increment" | "decrement") => {
    if (type == "decrement") {
      if (counter - 1 == 0) return;
      setCounter(counter - 1);
      return;
    }

    setCounter(counter + 1);
  };

  return (
    <CounterButtonContainer
      colors={[theme.colors.gradientLeft, theme.colors.gradientRight]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <CounterButtonWrapper>
        <CounterButtonText isButton onPress={() => updateCounter("decrement")}>
          -
        </CounterButtonText>
      </CounterButtonWrapper>
      <CounterButtonText style={{ paddingHorizontal: 10 }}>
        {counter}
      </CounterButtonText>
      <CounterButtonWrapper>
        <CounterButtonText isButton onPress={() => updateCounter("increment")}>
          +
        </CounterButtonText>
      </CounterButtonWrapper>
    </CounterButtonContainer>
  );
};

const AddToCart: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "AddToCart">>();
  const router = useRoute<RouteProp<RootStackParamList, "AddToCart">>();
  const { title, source, description, tappings } = router.params.data;

  const [selectedTappings, setSelectedTappings] = useState<
    Map<number, boolean>
  >(new Map());

  const parsedDescription =
    description.length > 200 ? `${description.slice(0, 200)}...` : description;

  const updateTappingState = (index: number) => {
    if (selectedTappings === undefined) {
      return;
    }

    if (selectedTappings.get(index) == true) {
      setSelectedTappings(new Map(selectedTappings.set(index, false)));
      return;
    } else {
      setSelectedTappings(new Map(selectedTappings.set(index, true)));
      return;
    }
  };

  const renderTappings = () => {
    if (tappings == null) {
      return (
        <StyledText small center>
          No tappings for today 🙃
        </StyledText>
      );
    }

    return (
      <>
        <StyledText small>Tappings for you</StyledText>
        <TappingsOptions horizontal showsHorizontalScrollIndicator={false}>
          {tappings.map((tapping, index) => {
            return (
              <TappingsOption
                key={index}
                isFirst={index == 0}
                isSelected={selectedTappings.get(index)}
                onPress={() => updateTappingState(index)}
              >
                <TappingsOptionText>{tapping.name}</TappingsOptionText>
              </TappingsOption>
            );
          })}
        </TappingsOptions>
      </>
    );
  };

  return (
    <Container>
      <Navbar buttonType="back" />
      <PageContent>
        <Shadow
          distance={10}
          startColor="rgba(61, 61, 61, 0.03)"
          radius={10}
          finalColor="transparent"
          offset={[0, 20]}
          size={[250, 235]}
        >
          <FoodOptionImageWrapper>
            <Image
              source={{ uri: source }}
              style={{ width: 150, height: 150 }}
            />
          </FoodOptionImageWrapper>
        </Shadow>
        <CounterButton />
        <StyledText center>{title}</StyledText>
        <FoodOptionDescription>{parsedDescription}</FoodOptionDescription>
        <FoodInformations>
          <FoodInformation size="small">
            <AntDesign size={20} name="star" color="#F5A62E" />
            <StyledText small>4+</StyledText>
          </FoodInformation>
          <FoodInformation size="normal">
            <Text>🔥</Text>
            <StyledText small>300cal</StyledText>
          </FoodInformation>
          <FoodInformation size="big">
            <Text>⏰</Text>
            <StyledText small>5-10min</StyledText>
          </FoodInformation>
        </FoodInformations>
        <TappingsContainer>{renderTappings()}</TappingsContainer>
        <Footer height={Number(height.toFixed())}>
          <Pressable onPress={() => navigation.push("Cart")}>
            <ActionButton>
              <ButtonText>Add to cart</ButtonText>
            </ActionButton>
          </Pressable>
        </Footer>
      </PageContent>
    </Container>
  );
};

export default AddToCart;
