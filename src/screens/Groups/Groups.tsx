import { Header } from "@components/Header/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { GroupsList } from "@components/GroupsList/GroupList";

export function Groups() {
	return (
		<Container>
			<Header />
			<Highlight title="Turmas" subtitle="jogue com a sua turma" />
			<GroupsList />
		</Container>
	);
}
