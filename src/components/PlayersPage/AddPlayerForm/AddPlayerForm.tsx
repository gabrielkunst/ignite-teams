import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
import { Input } from "@components/Input/Input";
import { Form } from "./styles";
import { useState } from "react";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";

interface AddPlayerFormProps {
  onSubmit: (playerName: string) => void;
}

export function AddPlayerForm({ onSubmit }: AddPlayerFormProps) {
  const [playerName, setPlayerName] = useState<string>("");

  const handleSubmit = () => {
    const trimmedPlayerName = playerName.trim();

    if (!trimmedPlayerName) {
      Alert.alert("Nome inválido", "O nome não pode ser vazio");
      return;
    }

    onSubmit(playerName);
    setPlayerName("");
  };

  return (
    <Form>
      <Input
        placeholder="Nome da pessoa"
        autoCorrect={false}
        value={playerName}
        onChangeText={setPlayerName}
        onSubmitEditing={handleSubmit}
      />
      <ButtonIcon iconName="add" type="PRIMARY" onPress={handleSubmit} />
    </Form>
  );
}
