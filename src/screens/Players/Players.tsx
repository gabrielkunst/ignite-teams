import { Header } from "@components/Header/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { useCallback, useState } from "react";
import { Button } from "@components/Button/Button";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Team } from "@@types/TeamType";
import { Group } from "@@types/GroupType";
import { Loading } from "@components/Loading";
import { AddPlayerForm } from "@components/PlayersPage/AddPlayerForm/AddPlayerForm";
import { TeamsHeader } from "@components/PlayersPage/TeamsHeader/TeamsHeader";
import { PlayersList } from "@components/PlayersPage/PlayersList/PlayersList";
import { useGroups } from "@contexts/GroupsContext/useGroups";
import { Alert } from "react-native";

type RouteParams = {
  groupId: string;
};

export function Players() {
  const [isLoading, setIsLoading] = useState(false);
  const [group, setGroup] = useState<Group | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<number>(0);
  const router = useRoute();
  const navigation = useNavigation();
  const {
    groups,
    getGroup,
    createPlayer,
    addPlayer,
    removeGroup,
    removePlayer,
  } = useGroups();

  const handleAddPlayer = (playerName: string) => {
    const newPlayer = createPlayer(playerName);
    addPlayer(group!.id, group!.teams[selectedTeam].id, newPlayer);
  };

  const handleDeletePlayer = (playerId: string) => {
    removePlayer(group!.id, group!.teams[selectedTeam].id, playerId);
  };

  const handleDeleteGroup = () => {
    Alert.alert("Remover turma", "Tem certeza que deseja remover esta turma?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: () => {
          removeGroup(group!.id);
          navigation.navigate("groups");
        },
        style: "destructive",
      },
    ]);
  };

  useFocusEffect(
    useCallback(() => {
      const setURLGroup = () => {
        try {
          setIsLoading(true);

          const { groupId } = router.params as RouteParams;
          const group = getGroup(groupId)!;
          // null assertion operator (!) used above
          // because if there is no group, getGroup throws an error
          // and the catch block will be executed, therefore here group is not undefined

          setGroup(group);
          setIsLoading(false);
        } catch (error) {
          Alert.alert("Ops! Ocorreu um erro ao carregar o grupo.");
          navigation.navigate("groups");
        }
      };

      setURLGroup();
    }, [groups])
  );

  if (!group || isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group?.name || "Nome do Grupo"}
        subtitle="adicione a galera e separe os times"
      />

      <AddPlayerForm onSubmit={handleAddPlayer} />

      <TeamsHeader
        group={group}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />

      <PlayersList
        handleDeletePlayer={handleDeletePlayer}
        selectedTeam={selectedTeam}
        group={group}
      />

      <Button
        text="Remover turma"
        type="SECONDARY"
        onPress={handleDeleteGroup}
      />
    </Container>
  );
}
