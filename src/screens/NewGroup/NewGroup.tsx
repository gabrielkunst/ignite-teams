import { Header } from "@components/Header/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";

export function NewGroup() {
	return (
		<Container>
			<Header showBackButton />
			<Content>
				<Icon />
				<Highlight
					title="Nova turma"
					subtitle="crie a turma para adicionar as pessoas"
				/>
				<Input placeholder="Nome da turma" />
				<Button text="Criar" style={{ marginTop: 20 }} />
			</Content>
		</Container>
	);
}
