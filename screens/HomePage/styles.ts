import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

export const PageContent = styled.View`
  margin-top: 20px;
  padding: 0px 24px;
`;

export const CategorySelectorContainer = styled.ScrollView`
  margin-top: 30px;
  padding-bottom: 30px;
`;

export const CategorySelectorWrapper = styled.Pressable<{
  first?: boolean;
  selected?: boolean;
}>`
  margin-left: ${(props) => (!props.first ? "20px" : "0px")};
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 130px;
  border-radius: 50px;
  border: 1px solid ${(props) => (props.selected ? "#3EC032" : "#F0CAC1")};
`;

export const CategorySelector = styled.View<{ selected?: boolean }>`
  width: 80%;
  height: 80%;
  border-radius: 50px;
  padding: 15px 0px;
  align-items: center;
  justify-content: space-around;
  opacity: ${(props) => (props.selected ? "1.0" : "0.3")};
  background-color: ${(props) =>
    props.selected ? "rgba(169, 232, 139, 0.2)" : "transparent"};
`;

export const FoodOptions = styled.FlatList`
  margin-top: 20px;
`;

export const FoodOptionShadowWrapper = styled.View<{ first?: boolean }>`
  padding-bottom: 20px;
  margin-left: ${(props) => (!props.first ? "30px" : "0px")};
`;

export const FoodOptionWrapper = styled.TouchableOpacity`
  width: 200px;
  height: 320px;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  border-radius: 20px;
  background-color: white;
`;

export const FoodImage = styled.Image`
  margin-bottom: 10px;
`;

export const FoodOptionDescription = styled.Text`
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

export const OrderButton = styled.Pressable`
  margin-top: 10px;
  width: 90%;
  padding: 10px 0px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.gradientLeft};
`;

export const OrderButtonText = styled.Text`
  font-weight: bold;
  text-align: center;
  color: white;
`;
