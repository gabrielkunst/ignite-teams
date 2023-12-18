import { FlatList } from "react-native";
import { HeaderList, NumberOfPlayers } from "./styles";
import { Group } from "@@types/GroupType";
import { Filter } from "@components/Filter/Filter";

interface TeamsHeaderProps {
  group: Group | null;
  selectedTeam: number;
  setSelectedTeam: (teamIndex: number) => void;
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
        renderItem={({ item, index }) => (
          <Filter
            title={item.name}
            isActive={index === selectedTeam}
            onPress={() => setSelectedTeam(index)}
          />
        )}
        horizontal
      />
      <NumberOfPlayers>
        {group?.teams[selectedTeam]?.players.length}
      </NumberOfPlayers>
    </HeaderList>
  );
}
