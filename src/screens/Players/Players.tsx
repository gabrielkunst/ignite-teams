import { Header } from "@components/Header/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { useEffect, useState } from "react";
import { Button } from "@components/Button/Button";
import { useRoute } from "@react-navigation/native";
import { Team } from "@@types/TeamType";
import { Group } from "@@types/GroupType";
import { Loading } from "@components/Loading";
import { Player } from "@@types/PlayerType";
import { AddPlayerForm } from "@components/PlayersPage/AddPlayerForm/AddPlayerForm";
import { TeamsHeader } from "@components/PlayersPage/TeamsHeader/TeamsHeader";
import { PlayersList } from "@components/PlayersPage/PlayersList/PlayersList";

type RouteParams = {
  groupId: string;
};

export function Players() {
  const [isLoading, setIsLoading] = useState(false);
  const [group, setGroup] = useState<Group | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const router = useRoute();
  const { groupId } = router.params as RouteParams;

  const handleAddPlayer = (playerName: string) => {};

  const handleDeletePlayer = (player: Player) => {};

  const handleDeleteGroup = () => {};

  useEffect(() => {});

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
      />

      <Button
        text="Remover turma"
        type="SECONDARY"
        onPress={handleDeleteGroup}
      />
    </Container>
  );
}
