import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
import { Input } from "@components/Input/Input";
import { Form } from "./styles";
import { useState } from "react";

interface AddPlayerFormProps {
  onSubmit: (playerName: string) => void;
}

export function AddPlayerForm({ onSubmit }: AddPlayerFormProps) {
  const [playerName, setPlayerName] = useState<string>("");

  const handleSubmit = () => {
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
