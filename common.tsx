import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import styled from "styled-components/native";

export const StyledText = styled.Text<{
  small?: boolean;
  normal?: boolean;
  center?: boolean;
}>`
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-weight: ${(props) => (props.normal ? "normal" : "bold")};
  font-size: ${(props) => (props.small ? "16px" : "24px")};
  color: ${(props) => props.theme.colors.text};
`;

export const BackIconWrapper = styled.View`
  width: 100%;
  padding: 10px;
  padding-left: 30px;
`;

export const BackIcon = (props: SvgProps) => {
  return (
    <Svg width="50px" height="50px" viewBox="0 0 40 15" fill="none" {...props}>
      <Path
        d="M9.5 1L1 7.5l8 6"
        stroke="#000"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        x="15"
        />
    </Svg>
  );
};

export const MenuIcon = (props: SvgProps) => {
  return (
    <Svg width="50px" height="50px" viewBox="0 0 40 40" fill="none" {...props}>
      <Path stroke="#000" d="M12 12.5h17M12 26.346h8.5M12 19.423h13.077" />
    </Svg>
  );
};
