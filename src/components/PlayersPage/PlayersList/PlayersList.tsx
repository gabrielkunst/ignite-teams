import { Player } from "@@types/PlayerType";
import { Team } from "@@types/TeamType";
import { ListEmpty } from "@components/ListEmpty/ListEmpty";
import { FlatList } from "react-native";
import { PlayerCard } from "../PlayerCard/PlayerCard";

interface PlayersListProps {
  selectedTeam: Team | null;
  handleDeletePlayer: (player: Player) => void;
}

export function PlayersList({
  selectedTeam,
  handleDeletePlayer,
}: PlayersListProps) {
  return (
    <FlatList
      data={selectedTeam?.players}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={() => (
        <ListEmpty message="Não há pessoas nesse time." />
      )}
      renderItem={({ item }) => (
        <PlayerCard
          name={item.name}
          onRemove={() => handleDeletePlayer(item)}
        />
      )}
      contentContainerStyle={[
        selectedTeam?.players.length !== 0 && {
          paddingBottom: 100,
        },
        selectedTeam?.players.length === 0 && {
          flex: 1,
        },
      ]}
    />
  );
}
