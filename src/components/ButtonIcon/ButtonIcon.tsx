import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonIconProps extends TouchableOpacityProps {
  type: ButtonIconTypeStyleProps;
  iconName: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({ iconName, type, ...props }: ButtonIconProps) {
  return (
    <Container {...props}>
      <Icon name={iconName} type={type} />
    </Container>
  );
}
