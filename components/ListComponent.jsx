import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Box } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useEffect } from "react";
export default function ListComponent({ item }) {
  const [like, setLike] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(item);
  }, []);
  return (
    <View>
      <View style={styles.ResultElement}>
        <Box style={styles.vocabularyBox}>
          <View style={styles.halfbox}>
            <TouchableOpacity style={styles.playButton}>
              <AntDesign name="playcircleo" size={28} color="#FE9E98" />
            </TouchableOpacity>
            <Text
              style={styles.koreanText}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {data.translation}
            </Text>
          </View>
          <View style={styles.halfbox2}>
            <Text
              style={styles.japanesText}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {data.descjp}
            </Text>
            <Text
              style={styles.koreanPronunce}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {data.descko}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.heartButton}
            onPress={() => {
              setLike(!like);
            }}
          >
            <AntDesign
              name={like === true ? "heart" : "hearto"}
              size={20}
              color="#FE9E98"
            />
          </TouchableOpacity>
        </Box>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ResultElement: {
    marginTop: 10,
    paddingHorizontal: 8,
  },
  vocabularyBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    // paddingHorizontal: 10,
    // padding: 2,
    borderWidth: 1,
    borderColor: "#FF6A6A",
    borderRadius: 15,
    overflow: "hidden",
    width: "100%",
  },
  playButton: {
    marginLeft: 10,
  },
  halfbox: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-around",
    width: "45%",
    height: 120,
    // paddingVertical: 28,
    // paddingHorizontal: 12,
    // borderRadius: 8,
    backgroundColor: "#FFDEDE",
  },
  halfbox2: {
    // flex: 1,
    width: "45%",
    maxWidth: "45%",
    height: "60%",
    maxHeight: "60%",
    alignItems: "center",
    justifyContent: "center",
    // padding: 8,
    margin: 4,
  },
  koreanText: {
    // position: "absolute",
    // left: 60,
    marginLeft: "8%",
    width: "60%",
    maxWidth: "60%",
    fontFamily: "suiteR",
    flexWrap: "wrap",
    textAlignVertical: "top",
    textAlign: "center",
  },
  japanesText: {
    padding: 4,
    textAlign: "center",
    fontFamily: "cha",
    fontSize: 12,
  },
  koreanPronunce: {
    padding: 4,
    margin: 2,
    fontFamily: "cha",
    textAlign: "center",
  },
  heartButton: {
    marginLeft: "auto",
    position: "absolute",
    top: 10,
    right: 10,
  },
});
