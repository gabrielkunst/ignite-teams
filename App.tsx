import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import Toast from "react-native-toast-message";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.COLORS.GRAY_700}
      />
      <Toast />
    </ThemeProvider>
  );
}
