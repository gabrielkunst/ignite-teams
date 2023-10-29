import { Header } from "@components/Header/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
import { Input } from "@components/Input/Input";
import { Filter } from "@components/Filter/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard/PlayerCard";
import { ListEmpty } from "@components/ListEmpty/ListEmpty";
import { Button } from "@components/Button/Button";

export function Players() {
	const [selectedTeam, setSelectedTeam] = useState("Time A");
	const [players, setPlayers] = useState<string[]>([]);

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

			<FlatList
				data={players}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item}
				ListEmptyComponent={() => (
					<ListEmpty message="Não há pessoas nesse time." />
				)}
				renderItem={({ item }) => (
					<PlayerCard name={item} onRemove={() => {}} />
				)}
				contentContainerStyle={[
					players.length !== 0 && { paddingBottom: 100 },
					players.length === 0 && {
						flex: 1,
					},
				]}
			/>

			<Button text="Remover turma" type="SECONDARY" />
		</Container>
	);
}
