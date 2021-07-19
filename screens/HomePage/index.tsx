import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Dimensions, Text, View } from "react-native";
import { StyledText } from "../../common";
import { HomePageCategories, ICategoryData } from "../../data";
import { Shadow } from "react-native-shadow-2";
import {
  CategorySelector,
  CategorySelectorContainer,
  CategorySelectorWrapper,
  Container,
  FoodImage,
  FoodOptionDescription,
  FoodOptions,
  FoodOptionShadowWrapper,
  FoodOptionWrapper,
  PageContent,
  OrderButton,
  OrderButtonText,
} from "./styles";
import { useNavigation } from "@react-navigation/core";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";

const { width } = Dimensions.get("screen");

const HomePage: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState(0);

  const renderFoodOption = (option: ICategoryData, index: number) => {
    return (
      <FoodOption
        key={index}
        title={option.title}
        description={option.description}
        imageSource={option.source}
        tappings={option.tappings}
        first={index == 0}
      />
    );
  };

  return (
    <Container>
      <Navbar buttonType="menu" />
      <PageContent>
        <StyledText>Enjoy delicous food</StyledText>
        <CategorySelectorContainer
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {HomePageCategories.map((category, index) => {
            return (
              <CategorySelectorWrapper
                key={index}
                selected={index == categorySelected}
                first={index == 0}
                onPress={() => setCategorySelected(index)}
              >
                <CategorySelector selected={index == categorySelected}>
                  <Text>{category.icon}</Text>
                  <Text>{category.title}</Text>
                </CategorySelector>
              </CategorySelectorWrapper>
            );
          })}
        </CategorySelectorContainer>
        <StyledText small>Popular restaurants</StyledText>
        <FoodOptions
          showsHorizontalScrollIndicator={false}
          data={HomePageCategories[categorySelected].data}
          horizontal
          renderItem={({ item, index }) =>
            renderFoodOption(item as ICategoryData, index)
          }
          ListEmptyComponent={() => (
            <View style={{ alignItems: "center", width, paddingRight: 24 }}>
              <StyledText small normal>
                No restaurant with this option
              </StyledText>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </PageContent>
    </Container>
  );
};

const FoodOption = ({
  imageSource,
  title,
  description,
  tappings,
  first,
}: {
  imageSource: string;
  title: string;
  description: string;
  tappings?: { name: string }[];
  first?: boolean;
}) => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "HomePage">>();

  const parsedDescription =
    description.length > 60 ? `${description.slice(0, 60)}...` : description;

  return (
    <FoodOptionShadowWrapper first={first}>
      <Shadow
        distance={10}
        startColor="rgba(61, 61, 61, 0.03)"
        radius={10}
        finalColor="transparent"
        offset={[1.5, 30]}
        size={[195, 295]}
      >
        <FoodOptionWrapper activeOpacity={0.8}>
          <FoodImage
            source={{ uri: imageSource }}
            style={{ width: 150, height: 150 }}
          />
          <StyledText small center>
            {title}
          </StyledText>
          <FoodOptionDescription>{parsedDescription}</FoodOptionDescription>
          <OrderButton
            onPress={() =>
              navigation.push("AddToCart", {
                data: {
                  title,
                  source: imageSource,
                  description,
                  tappings,
                },
              })
            }
          >
            <OrderButtonText>Order</OrderButtonText>
          </OrderButton>
        </FoodOptionWrapper>
      </Shadow>
    </FoodOptionShadowWrapper>
  );
};

export default HomePage;