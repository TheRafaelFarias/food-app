import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentContainer = styled.View`
  margin: 10%;
  margin-bottom: 0;
  justify-content: space-around;
  height: 60%;
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
  margin-top: -3%;
`;

export const Bottom = styled.View<{ height: number }>`
  align-items: center;
  position: absolute;
  top: ${(props) => props.height - props.height * 0.3}px;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const RegisterButton = styled.TouchableOpacity`
  margin-top: 5%;
`;

export const LoginButtonWrapper = styled.View`
  align-items: center;
  margin-bottom: -27%;
`;
