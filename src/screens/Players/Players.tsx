import { Header } from "@components/Header/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
import { Input } from "@components/Input/Input";
import { Filter } from "@components/Filter/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
	const [selectedTeam, setSelectedTeam] = useState("Time A");
	const [players, setPlayers] = useState<string[]>(["Rodrigo", "João"]);

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

			<HeaderList>
				<FlatList
					data={["Time A", "Time B"]}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<Filter
							title={item}
							isActive={item === selectedTeam}
							onPress={() => setSelectedTeam(item)}
						/>
					)}
					horizontal
				/>
				<NumberOfPlayers>{players.length}</NumberOfPlayers>
			</HeaderList>
		</Container>
	);
}
