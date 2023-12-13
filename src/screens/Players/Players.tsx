import { Header } from "@components/Header/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight/Hightlight";
import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
import { Input } from "@components/Input/Input";
import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { PlayerCard } from "@components/PlayerCard/PlayerCard";
import { ListEmpty } from "@components/ListEmpty/ListEmpty";
import { Button } from "@components/Button/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Group } from "@contexts/GroupsContext/GroupContextProps";
import { Loading } from "@components/Loading";
import { useGroups } from "@contexts/GroupsContext/useGroups";
import Toast from "react-native-toast-message";

type RouteParams = {
	groupId: string;
};

export function Players() {
	const route = useRoute();
	const { groupId } = route.params as RouteParams;
	const { getGroup } = useGroups();
	const navigation = useNavigation();
	const [currentGroup, setCurrentGroup] = useState<Group>();

	useEffect(() => {
		const selectedGroup = getGroup(groupId);

		if (!selectedGroup) {
			Toast.show({
				text1: "Erro ao carregar turma",
				text2: "Tente novamente mais tarde",
				type: "error",
				visibilityTime: 2000,
				text1Style: {
					fontSize: 14,
				},
				text2Style: {
					fontSize: 14,
				},
			});
			navigation.navigate("groups");
			return;
		}

		setCurrentGroup(selectedGroup);
	}, []);

	if (!currentGroup) {
		return <Loading />;
	}

	return (
		<Container>
			<Header showBackButton />
			<Highlight title={currentGroup.name} subtitle="adicione a galera" />

			<Form>
				<Input placeholder="Nome da pessoa" autoCorrect={false} />
				<ButtonIcon iconName="add" type="PRIMARY" />
			</Form>

			<FlatList
				data={currentGroup.members}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={() => (
					<ListEmpty message="Não há pessoas nesse time." />
				)}
				renderItem={({ item }) => (
					<PlayerCard name={item.name} onRemove={() => {}} />
				)}
				contentContainerStyle={[
					currentGroup.members.length !== 0 && { paddingBottom: 100 },
					currentGroup.members.length === 0 && {
						flex: 1,
					},
				]}
			/>

			<Button text="Remover turma" type="SECONDARY" />
		</Container>
	);
}
