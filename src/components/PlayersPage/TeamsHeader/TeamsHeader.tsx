import { FlatList } from "react-native";
import { HeaderList, NumberOfPlayers } from "./styles";
import { Group } from "@@types/GroupType";
import { Team } from "@@types/TeamType";
import { Filter } from "@components/Filter/Filter";

interface TeamsHeaderProps {
  group: Group | null;
  selectedTeam: Team | null;
  setSelectedTeam: (team: Team) => void;
}

export function TeamsHeader({
  group,
  selectedTeam,
  setSelectedTeam,
}: TeamsHeaderProps) {
  return (
    <HeaderList>
      <FlatList
        data={group?.teams}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Filter
            title={item.name}
            isActive={item.id === selectedTeam?.id}
            onPress={() => setSelectedTeam(item)}
          />
        )}
        horizontal
      />
      <NumberOfPlayers>{selectedTeam?.players.length}</NumberOfPlayers>
    </HeaderList>
  );
}
