import { Header } from "@components/Header/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { Button } from "@components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { GroupsList } from "@components/GroupsPage/GroupsList/GroupList";

export function Groups() {
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupsList />
      <Button text="Criar turma" onPress={handleNewGroup} />
    </Container>
  );
}
