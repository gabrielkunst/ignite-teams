import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Text } from "./styles";

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...props }: FilterProps) {
  return (
    <Container isActive={isActive} {...props}>
      <Text>{title}</Text>
    </Container>
  );
}
