import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function CardComponent() {
  return (
    // <View style={styles.cardBoxCon}>
    <View style={styles.cardBox}>
      <View style={styles.cardBoxTop}>
        <Text style={styles.cardBoxTitle} numberOfLines={2}>
          여기 묵을 수 있나요?
        </Text>
        <AntDesign name="hearto" size={20} color="#FE9E98" />
      </View>
      <View style={styles.cardBoxContent}>
        <View style={styles.japaneseCon}>
          <Text style={styles.koreanPro} numberOfLines={2}>
            타쿠시이노리바와 도코데스카?
          </Text>
          <Text style={styles.japanese} numberOfLines={2}>
            タクシー乗り場はどこですか？
          </Text>
        </View>
        <TouchableOpacity style={styles.playButton}>
          <AntDesign name="playcircleo" size={28} color="#FE9E98" />
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );
}
const styles = StyleSheet.create({
  // cardBoxCon: {
  //   flex: 1,
  //   // width: "100%",
  //   // height: "100%",
  //   flexDirection: "row",
  //   borderWidth: 3,
  //   borderColor: "red",
  // },
  cardBox: {
    borderWidth: 1,
    width: 250,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginVertical: "6%",
    marginHorizontal: 4,
    shadowColor: "#4A261B",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 3,
  },
  cardBoxTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 0.5,
    borderStyle: "dotted",
    borderColor: "#656565",
    paddingVertical: 8,
  },
  cardBoxTitle: {
    // flex: 1,
    width: "90%",
    maxWidth: "90%",
    fontSize: 16,
    fontFamily: "suiteB",
    color: "#2C2C2C",
  },
  cardBoxContent: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  koreanPro: {
    fontSize: 16,
    marginBottom: 16,
    width: "100%",
    maxWidth: "100%",
    fontFamily: "cha",
    color: "#2C2C2C",
  },
  japanese: {
    fontSize: 12,
    color: "#656565",
    marginBottom: 16,
    width: "100%",
    maxWidth: "100%",
  },
  playButton: {
    // marginLeft: "auto",
    position: "absolute",
    bottom: "30%",
    right: 0,
  },
});
