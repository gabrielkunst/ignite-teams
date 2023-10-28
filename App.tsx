import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
	Roboto_400Regular,
	Roboto_700Bold,
	useFonts,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";
import { Groups } from "@screens/Groups/Groups";

export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	return (
		<ThemeProvider theme={theme}>
			{fontsLoaded ? <Groups /> : <Loading />}
			<StatusBar
				barStyle="light-content"
				backgroundColor={theme.COLORS.GRAY_700}
			/>
		</ThemeProvider>
	);
}
