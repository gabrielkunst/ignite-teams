import { Header } from "@components/Header/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
	const [group, setGroup] = useState("");
	const navigation = useNavigation();

	const handleNewGroup = () => {
		navigation.navigate("players", { group });
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
