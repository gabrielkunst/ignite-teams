import { Header } from "@components/Header/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useGroups } from "@contexts/GroupsContext/useGroups";
import Toast from "react-native-toast-message";

export function NewGroup() {
	const [group, setGroup] = useState("");
	const navigation = useNavigation();
	const { createGroup } = useGroups();

	const handleNewGroup = () => {
		if (!group) {
			Toast.show({
				text1: "Erro ao criar turma",
				text2: "Você precisa dar um nome para a turma",
				type: "error",
				visibilityTime: 2000,
				text1Style: {
					fontSize: 14,
				},
				text2Style: {
					fontSize: 14,
				},
			});
			return;
		}

		const newGroup = createGroup(group);
		navigation.navigate("players", { groupId: String(newGroup.id) });
	};

	return (
		<Container>
			<Header showBackButton />
			<Content>
				<Icon />
				<Highlight
					title="Nova turma"
					subtitle="crie a turma para adicionar as pessoas"
				/>
				<Input
					placeholder="Nome da turma"
					onChangeText={setGroup}
					value={group}
				/>
				<Button
					text="Criar"
					style={{ marginTop: 20 }}
					onPress={handleNewGroup}
				/>
			</Content>
		</Container>
	);
}
