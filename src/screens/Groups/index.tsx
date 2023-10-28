import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
	return (
		<Container>
			<Header />
			<Highlight title="Turmas" subtitle="jogue com a sua turma" />
			<GroupCard title="Turma 1" />
			<GroupCard title="Turma 2" />
			<GroupCard title="Turma 3" />
		</Container>
	);
}
