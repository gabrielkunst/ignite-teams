import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonTypeStyleProps;
  text: string;
}

export function Button({ type = "PRIMARY", text, ...props }: ButtonProps) {
  return (
    <Container type={type} {...props}>
      <Title>{text}</Title>
    </Container>
  );
}
