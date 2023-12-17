import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
import { Container, Icon, Name } from "./styles";
import { Alert } from "react-native";

interface PlayerCardProps {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  const handleDeletePlayer = () => {
    Alert.alert(
      "Remover jogador",
      "Tem certeza que deseja remover esse jogador?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          style: "destructive",
          onPress: onRemove,
        },
      ]
    );
  };

  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon
        iconName="close"
        type="SECONDARY"
        onPress={handleDeletePlayer}
      />
    </Container>
  );
}
