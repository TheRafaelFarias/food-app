import styled from "styled-components/native";

export const Container = styled.View`
  background: ${(props) => props.theme.colors.background};
  justify-content: space-around;
`;

export const PageContent = styled.View`
  margin-top: 10px;
  padding: 0px 24px;
  align-items: center;
  justify-content: center;
`;

export const SuccessInformation = styled.View`
  margin-top: 40%;
  align-items: center;
  justify-content: space-between;
`;

export const SuccessInformationMargin = styled.View`
  margin: 10px 0px;
`;

export const Description = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

export const Footer = styled.View<{ height: number }>`
  align-items: center;
  position: absolute;
  top: ${(props) => props.height - props.height * 0.23}px;
  bottom: 0;
  left: 0;
  right: 0;
`;
