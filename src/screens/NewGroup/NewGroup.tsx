import { Header } from "@components/Header/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { useState } from "react";
import { useGroups } from "@contexts/GroupsContext/useGroups";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export function NewGroup() {
  const { addGroup, createGroup } = useGroups();
  const [groupName, setGroupName] = useState("");
  const navigation = useNavigation();

  const handleNewGroup = () => {
    const trimmedGroupName = groupName.trim();

    if (!trimmedGroupName) {
      Alert.alert("Nome inválido", "O nome não pode ser vazio");
      return;
    }

    const newGroup = createGroup(trimmedGroupName);
    addGroup(newGroup);
    navigation.navigate("players", {
      groupId: newGroup.id,
    });
  };

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={setGroupName}
          value={groupName}
        />
        <Button
          text="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
