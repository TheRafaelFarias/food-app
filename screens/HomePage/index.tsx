import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { SharedElement } from "react-navigation-shared-element";
import { RootStackParamList } from "../../App";
import { StyledText } from "../../common";
import Navbar from "../../components/Navbar";
import { HomePageCategories, ICategoryData } from "../../data";
import { theme } from "../../globals";
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
  Footer,
  FooterIcon,
  OrderButton,
  OrderButtonText,
  PageContent,
  PageWrapper,
} from "./styles";

const HomePage = () => {
  const [categorySelected, setCategorySelected] = useState(0);
  const { width, height } = useWindowDimensions();

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
    <>
      <PageWrapper>
        <Container isSmallDevice={width < 375} screenHeight={height}>
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
      </PageWrapper>
      <Shadow
        distance={10}
        startColor="rgba(61, 61, 61, 0.05)"
        radius={25}
        finalColor="transparent"
        offset={[0, -5]}
        size={[width, 50]}
        containerViewStyle={{
          position: "absolute",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          bottom: 1,
          flexDirection: "row",
          backgroundColor: "white",
          width: "100%",
          left: 0,
          right: 0,
        }}
      >
        <Footer>
          <FooterIcon source={require("../../assets/Active/Home/Home.png")} />
          <FooterIcon
            source={require("../../assets/NotActive/Heart/Heart.png")}
          />
          <LinearGradient
            colors={[theme.colors.gradientLeft, theme.colors.gradientRight]}
            style={{
              padding: 20,
              borderRadius: 50,
            }}
          >
            <FooterIcon
              style={{ width: 20, height: 20 }}
              source={require("../../assets/Active/Search/Search.png")}
            />
          </LinearGradient>
          <FooterIcon
            source={require("../../assets/NotActive/Notification/Notification.png")}
          />
          <FooterIcon source={require("../../assets/NotActive/Buy/Buy.png")} />
        </Footer>
      </Shadow>
    </>
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
          <SharedElement id={title.toLowerCase()}>
            <FoodImage
              source={{ uri: imageSource }}
              style={{ width: 150, height: 150 }}
            />
          </SharedElement>
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
