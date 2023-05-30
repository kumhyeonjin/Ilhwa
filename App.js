import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigator";
import { useState, useEffect } from "react";
//
import { NativeBaseProvider, extendTheme } from "native-base";
//
// expo-font 라이브러리를 사용하여 폰트를 로드합니다.
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
// native-base 사용중 theme 오류 발생시 아래 코드 사용
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
// extend the theme
export const theme = extendTheme({ config });
//
import Intro from "./pages/Intro";

export default function App() {
  const [ready, setReady] = useState(false);
  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({
        // 디바이스 기종별, OS 별로 해당 폰트가 지원되지 않을 수도 있습니다.
        cha: require("./assets/fonts/KCC-Chassam.ttf"),
        suiteR: require("./assets/fonts/SUITE-Regular.ttf"),
        suiteB: require("./assets/fonts/SUITE-Bold.ttf"),
        ...Ionicons.font,
      });
      setReady(true);
    }, 1000);
  };
  useEffect(() => {
    loadFont();
  }, []);
  return ready ? (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="black" />
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  ) : (
    <Intro />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 90,
    left: 70,
    resizeMode: "contain",
  },
});
