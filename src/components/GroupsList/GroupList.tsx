import { GroupCard } from "@components/GroupCard/GroupCard";
import { ListEmpty } from "@components/ListEmpty/ListEmpty";
import { Group } from "@contexts/GroupsContext/GroupContextProps";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

interface GroupsListProps {
	groups: Group[];
}

export function GroupsList({ groups }: GroupsListProps) {
	const navigation = useNavigation();

	const handleGroupPress = (id: string) => {
		navigation.navigate("players", { groupId: id });
	};

	return (
		<FlatList
			data={groups}
			keyExtractor={(group) => group.id.toString()}
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
