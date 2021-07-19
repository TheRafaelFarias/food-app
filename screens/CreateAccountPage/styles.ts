import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin: 10%;
  margin-bottom: 0;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;

  color: ${(props) => props.theme.colors.shadeOne};
`;

export const Description = styled.Text`
  margin: 2% 0;
  font-weight: 300;

  color: ${(props) => props.theme.colors.shadeTwo};
`;

export const Form = styled.View`
  margin-top: 5%;
  margin-bottom: 20%;
`;

export const Bottom = styled.View`
  align-items: center;
  margin-bottom: 20%;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-top: 5%;
`;
