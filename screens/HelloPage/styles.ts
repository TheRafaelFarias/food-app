import { Image } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentContainer = styled.View`
  margin-top: 20%;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 0 10%;
  color: ${(props) => props.theme.colors.shadeOne};
`;

export const AppPreviewImage = styled(Image)`
  margin: 0 auto;
  margin-top: 10%;
`;

export const Buttons = styled.View`
  margin-top: 25%;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-top: 4%;
`;
