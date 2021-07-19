import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { BackIcon, MenuIcon } from "../../common";
import {
  AvatarImage,
  Container,
  DeliveryContainer,
  DeliveryText,
} from "./styles";

type Props = {
  buttonType: "back" | "menu";
};

const Navbar: React.FC<Props> = ({ buttonType }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const renderButtonType = () => {
    switch (buttonType) {
      case "back":
        return (
          <BackIcon
            onPress={() => {
              navigation.goBack();
            }}
          />
        );
      case "menu":
        return <MenuIcon />;
    }
  };

  return (
    <Container>
      {renderButtonType()}
      <DeliveryContainer>
        <Text>Delivery to</Text>
        <DeliveryText>Home</DeliveryText>
      </DeliveryContainer>
      <AvatarImage source={require("../../assets/avatar.png")} />
    </Container>
  );
};

export default Navbar;
