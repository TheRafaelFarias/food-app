import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentContainer = styled.View`
  /* margin-top: 5%; */
  align-items: center;
  justify-content: space-between;
  /* background-color: blue; */
  height: 85%;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 0 10%;
  color: ${(props) => props.theme.colors.shadeOne};
`;

export const AppPreviewImage = styled.View`
  align-items: center;
  justify-content: center;
  /* background-color: blue; */
  padding: 0px;
`;

export const Buttons = styled.View``;

export const LoginButton = styled.TouchableOpacity`
  margin-top: 4%;
`;
