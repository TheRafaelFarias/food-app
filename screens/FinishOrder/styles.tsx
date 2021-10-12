import styled from "styled-components/native";
import { StyledText } from "../../common";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;

export const PageContent = styled.View`
  margin-top: 10px;
  padding: 0px 24px;
`;

export const InformationsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InformationText = styled.Text<{
  setWidth?: boolean;
  hasMargin?: boolean;
  bigSize?: boolean;
}>`
  color: black;
  font-size: ${(props) => (props.bigSize ? "20px" : "15px")};
  ${(props) => props.setWidth && "width: 70%"}
  margin: ${(props) => (props.hasMargin ? "10px 0px" : "0px")};
`;

export const ChangeButton = styled.Text`
  color: ${(props) => props.theme.colors.primary};
`;

export const PaymentTitle = styled(StyledText)`
  margin-top: 30px;
`;

export const PaymentMethods = styled.View`
  flex-direction: row;
  align-items: center;
  height: 70px;
  margin-top: 10px;
`;

export const PaymentMethodOptionWrapper = styled.Pressable<{
  selected?: boolean;
}>`
  width: 75px;
  height: 75px;
  border-radius: 20px;
  margin-left: 20px;
  align-items: center;
  border: ${(props) =>
    props.selected
      ? `2px ${props.theme.colors.primary}`
      : `2px ${props.theme.colors.background}`};
`;

export const PaymentMethodOption = styled.Image`
  margin-top: -15px;
`;

export const Footer = styled.View`
  align-items: center;
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
`;

export const FooterInformationsContainer = styled.View`
  padding: 0px 24px;
`;

export const PriceText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0px;
`;
