import { Container, Subtitle, Title } from "./styles";

interface HighlightProps {
  title: string;
  subtitle: string;
}

export function Highlight({ subtitle, title }: HighlightProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
