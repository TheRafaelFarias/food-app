import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const PageWrapper = styled.ScrollView`
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Container = styled.View<{
  isSmallDevice: boolean;
  screenHeight: number;
}>`
  background-color: ${(props) => props.theme.colors.background};
  height: ${(props) =>
    props.isSmallDevice ? `${props.screenHeight + 70}px` : "120%"};
`;

export const PageContent = styled.View`
  margin-top: 30px;
  align-items: center;
  padding: 0px 24px;
`;

export const FoodOptionImageWrapper = styled.View`
  border-radius: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  margin-bottom: 30px;
  background-color: white;
`;

export const CounterButtonContainer = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const CounterButtonWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

export const CounterButtonText = styled.Text<{ isButton?: boolean }>`
  color: white;
  font-size: ${(props) => (props.isButton ? "20px" : "15px")};
  padding: ${(props) => `0px ${props.isButton ? "10px" : "0px"}`};
`;

export const FoodOptionDescription = styled.Text`
  width: 90%;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

export const FoodInformations = styled.View`
  flex-direction: row;
  margin-top: 20px;
  width: 70%;
  justify-content: space-between;
`;

const returnSizeByType = (size: "big" | "small" | "normal"): string => {
  let typeSize = "";
  switch (size) {
    case "normal":
      typeSize = "80px";
      break;
    case "big":
      typeSize = "95px";
      break;
    case "small":
      typeSize = "45px";
      break;
  }
  return typeSize;
};

export const FoodInformation = styled.View<{
  size: "small" | "normal" | "big";
}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => returnSizeByType(props.size)};
`;

export const TappingsContainer = styled.View`
  margin-top: 40px;
  width: 95%;
`;

export const TappingsOptions = styled.ScrollView`
  margin-top: 20px;
`;

export const TappingsOption = styled.Pressable<{
  isFirst?: boolean;
  isSelected?: boolean;
}>`
  padding: 15px 5px;
  border-radius: 50px;
  margin-left: ${(props) => (!props.isFirst ? "15px" : "0px")};
  background-color: ${(props) =>
    props.isSelected ? "white" : props.theme.colors.background};
  border: ${(props) =>
    props.isSelected
      ? `1px ${props.theme.colors.primary}`
      : `1px ${props.theme.colors.background}`};
`;

export const TappingsOptionText = styled.Text`
  font-size: 13px;
  padding: 0px 10px;
  color: ${(props) => props.theme.colors.text};
`;

export const Footer = styled.View`
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
`;
