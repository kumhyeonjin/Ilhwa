import { Box, HStack } from "native-base";
import React from "react";
import { useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import PutCartComponent from "../components/PutCardComponent";
import { Entypo } from "@expo/vector-icons";
export default function PutSentence({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: "담은 문장",
      headerStyle: {
        backgroundColor: "#fff",
        height: 85,
        shadowColor: "transparent",
        borderBottomWidth: 0.3,
        borderBottomColor: "#2c2c2c",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily: "suiteB",
      },
      headerShown: true,
      headerTitleAlign: "center",
      headerBackImage: () => (
        <Entypo name="chevron-left" size={24} color="#2C2C2C" />
      ),
    });
  }, []);
  return (
    <View style={styles.PutPageAll}>
      <ScrollView>
        <HStack style={styles.PutPageMargin}>
          <PutCartComponent />
          <PutCartComponent />
        </HStack>
        <HStack style={styles.PutPageMargin}>
          <PutCartComponent />
          <PutCartComponent />
        </HStack>
        <HStack style={styles.PutPageMargin}>
          <PutCartComponent />
          <PutCartComponent />
        </HStack>
        <HStack style={styles.PutPageMargin}>
          <PutCartComponent />
          <PutCartComponent />
        </HStack>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  PutPageAll: {
    flex: 1,
    paddingHorizontal: 8,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
  },
  PutPageMargin: {
    marginVertical: 12,
  },
});
