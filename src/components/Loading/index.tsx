import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator size="large" />
    </Container>
  );
}
