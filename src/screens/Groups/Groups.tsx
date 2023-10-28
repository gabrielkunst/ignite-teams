import { Header } from "@components/Header/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { GroupsList } from "@components/GroupsList/GroupList";
import { useState } from "react";
import { Button } from "@components/Button/Button";

export function Groups() {
	const [groups, setGroups] = useState<string[]>([
		"Grupo 1",
		"Grupo 2",
		"Grupo 3",
		"Grupo 4",
		"Grupo 5",
		"Grupo 6",
		"Grupo 7",
		"Grupo 8",
	]);

	return (
		<Container>
			<Header />
			<Highlight title="Turmas" subtitle="jogue com a sua turma" />
			<GroupsList groups={groups} />
			<Button text="Criar turma" />
		</Container>
	);
}
