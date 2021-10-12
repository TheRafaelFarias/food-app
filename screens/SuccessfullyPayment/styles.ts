import styled from "styled-components/native";

export const Container = styled.View`
  background: ${(props) => props.theme.colors.background};
  height: 100%;
`;

export const PageContent = styled.View`
  padding: 0px 24px;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

export const SuccessInformation = styled.View`
  align-items: center;
`;

export const SuccessInformationMargin = styled.View`
  margin: 10px 0px;
`;

export const Description = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

export const Footer = styled.View`
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
`;
