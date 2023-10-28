import { GroupCard } from "@components/GroupCard/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export function GroupsList() {
	const [groups, setGroups] = useState<string[]>([
		"Grupo 1",
		"Grupo 2",
		"Grupo 3",
		"Grupo 4",
		"Grupo 5",
	]);

	return (
		<FlatList
			data={groups}
			keyExtractor={(item) => item}
			renderItem={({ item }) => <GroupCard title={item} />}
		/>
	);
}
