import { GroupsContextProvider } from "@contexts/GroupsContext/GroupsContextProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups/Groups";
import { NewGroup } from "@screens/NewGroup/NewGroup";
import { Players } from "@screens/Players/Players";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouter() {
	return (
		<GroupsContextProvider>
			<Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Screen name="groups" component={Groups} />
				<Screen name="new" component={NewGroup} />
				<Screen name="players" component={Players} />
			</Navigator>
		</GroupsContextProvider>
	);
}
