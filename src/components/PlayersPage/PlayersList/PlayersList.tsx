import { ListEmpty } from "@components/ListEmpty/ListEmpty";
import { FlatList } from "react-native";
import { PlayerCard } from "../PlayerCard/PlayerCard";
import { Group } from "@@types/GroupType";

interface PlayersListProps {
  group: Group | null;
  selectedTeam: number;
  handleDeletePlayer: (playerId: string) => void;
}

export function PlayersList({
  selectedTeam,
  handleDeletePlayer,
  group,
}: PlayersListProps) {
  return (
    <FlatList
      data={group?.teams[selectedTeam]?.players}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={() => (
        <ListEmpty message="Não há pessoas nesse time." />
      )}
      renderItem={({ item }) => (
        <PlayerCard
          name={item.name}
          onRemove={() => handleDeletePlayer(item.id)}
        />
      )}
      contentContainerStyle={[
        group?.teams[selectedTeam]?.players.length !== 0 && {
          paddingBottom: 100,
        },
        group?.teams[selectedTeam]?.players.length === 0 && {
          flex: 1,
        },
      ]}
    />
  );
}
