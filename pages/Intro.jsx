import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

//
const InBack = require("../assets/introBg.png");
const Logo = require("../assets/title.png");
export default function Intro() {
  return (
    <View style={styles.container}>
      <ImageBackground source={InBack} style={styles.backImage}>
        <Image source={Logo} style={styles.logo}></Image>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
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
