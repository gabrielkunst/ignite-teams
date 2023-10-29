import { Header } from "@components/Header/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
import { Input } from "@components/Input/Input";

export function Players() {
	return (
		<Container>
			<Header showBackButton />
			<Highlight
				title="Nome da turma"
				subtitle="adicione a galera e separe os times"
			/>

			<Form>
				<Input placeholder="Nome da pessoa" autoCorrect={false} />
				<ButtonIcon iconName="add" type="PRIMARY" />
			</Form>
		</Container>
	);
}
