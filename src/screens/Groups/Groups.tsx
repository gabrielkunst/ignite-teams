import { Header } from "@components/Header/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { GroupsList } from "@components/GroupsList/GroupList";
import { useState } from "react";
import { Button } from "@components/Button/Button";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
	const [groups, setGroups] = useState<string[]>([]);
	const navigation = useNavigation();

	const handleNewGroup = () => {
		navigation.navigate("new");
	};

	return (
		<Container>
			<Header />
			<Highlight title="Turmas" subtitle="jogue com a sua turma" />
			<GroupsList groups={groups} />
			<Button text="Criar turma" onPress={handleNewGroup} />
		</Container>
	);
}
