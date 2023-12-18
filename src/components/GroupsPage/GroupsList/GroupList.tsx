import { GroupCard } from "@components/GroupsPage/GroupCard/GroupCard";
import { ListEmpty } from "@components/ListEmpty/ListEmpty";
import { useGroups } from "@contexts/GroupsContext/useGroups";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

export function GroupsList() {
  const { groups } = useGroups();
  const navigation = useNavigation();

  const handleGroupPress = (groupId: string) => {
    navigation.navigate("players", { groupId });
  };

  return (
    <FlatList
      data={groups}
      keyExtractor={(group) => group.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <GroupCard
          title={item.name}
          onPress={() => handleGroupPress(item.id)}
        />
      )}
      contentContainerStyle={groups.length === 0 && { flex: 1 }}
      ListEmptyComponent={() => (
        <ListEmpty message="Que tal cadastrar a primeira turma?" />
      )}
    />
  );
}
