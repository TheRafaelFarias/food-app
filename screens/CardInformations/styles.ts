import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;

export const BackIconWrapper = styled.View`
  width: 100%;
  padding: 10px;
  padding-left: 30px;
`;

export const PageContent = styled.View`
  margin-top: 10px;
  padding: 0px 24px;
`;

export const Footer = styled.View`
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
`;
