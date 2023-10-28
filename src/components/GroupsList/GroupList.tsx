import { GroupCard } from "@components/GroupCard/GroupCard";
import { ListEmpty } from "@components/ListEmpty/ListEmpty";
import { FlatList } from "react-native";

interface GroupsListProps {
	groups: string[];
}

export function GroupsList({ groups }: GroupsListProps) {
	return (
		<FlatList
			data={groups}
			keyExtractor={(item) => item}
			showsVerticalScrollIndicator={false}
			renderItem={({ item }) => <GroupCard title={item} />}
			contentContainerStyle={groups.length === 0 && { flex: 1 }}
			ListEmptyComponent={() => (
				<ListEmpty message="Que tal cadastrar a primeira turma?" />
			)}
		/>
	);
}
