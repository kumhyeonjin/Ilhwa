import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Box, ScrollView } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
export default function StudyPage() {
  return (
    <ScrollView>
      <Box safeAreaTop />
      <LinearGradient
        colors={["#FFF2F2", "#DAE7FE", "#FFE7E7"]}
        locations={[0.2, 0.5, 0.8]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.studyPageBack}
      >
        <View style={styles.stuePageAll}>
          <View style={styles.mystudyTitle}>
            <Image
              source={require("../assets/user.png")}
              style={styles.user_Image}
            />
            <Text style={styles.mystudyTitleText}>ㅇㅇㅇ님의 학습진도</Text>
          </View>
          <View style={styles.studyStageCon}>
            <View style={styles.row}>
              <Box style={styles.stepBox}>
                <LinearGradient
                  colors={["#FFBDB9", "#BBD0F5"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.stepback}
                >
                  <Text style={styles.step}>1단계</Text>
                </LinearGradient>
                <Text style={styles.stepend}>학습완료</Text>
              </Box>
              <Box style={styles.stepBox}>
                <LinearGradient
                  colors={["#FFBDB9", "#BBD0F5"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.stepback}
                >
                  <Text style={styles.step}>2단계</Text>
                </LinearGradient>
                <AntDesign name="lock" size={22} color="#2C2C2C" />
              </Box>
            </View>
            <View style={styles.row}>
              <Box style={styles.stepBox}>
                <LinearGradient
                  colors={["#FFBDB9", "#BBD0F5"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.stepback}
                >
                  <Text style={styles.step}>3단계</Text>
                </LinearGradient>
                <AntDesign name="lock" size={22} color="#2C2C2C" />
              </Box>
              <Box style={styles.stepBox}>
                <LinearGradient
                  colors={["#FFBDB9", "#BBD0F5"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.stepback}
                >
                  <Text style={styles.step}>4단계</Text>
                </LinearGradient>
                <AntDesign name="lock" size={22} color="#2C2C2C" />
              </Box>
            </View>
            <View style={styles.row}>
              <Box style={styles.stepBox}>
                <LinearGradient
                  colors={["#FFBDB9", "#BBD0F5"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.stepback}
                >
                  <Text style={styles.step}>5단계</Text>
                </LinearGradient>
                <AntDesign name="lock" size={22} color="#2C2C2C" />
              </Box>
              <Box style={styles.stepBox}>
                <LinearGradient
                  colors={["#FFBDB9", "#BBD0F5"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.stepback}
                >
                  <Text style={styles.step}>6단계</Text>
                </LinearGradient>
                <AntDesign name="lock" size={22} color="#2C2C2C" />
              </Box>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  studyPageBack: {
    flex: 1,
  },
  stuePageAll: {
    paddingHorizontal: 12,
  },
  mystudyTitle: {
    flexDirection: "row",

    paddingHorizontal: 24,
    marginVertical: 12,
    alignItems: "center",
  },
  user_Image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  mystudyTitleText: {
    marginLeft: "5%",
    fontFamily: "suiteB",
    color: "#2C2C2C",
    fontSize: 16,
  },
  studyStageCon: {
    flexDirection: "column",
    padding: 24,
    marginVertical: 12,
    borderWidth: 0.5,
    borderColor: "#656565",
    borderStyle: "dotted",
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  stepBox: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.8,
    borderColor: "#656565",
    width: "40%",
    height: 100,
    marginVertical: 15,
    borderRadius: 5,
  },
  stepback: {
    position: "absolute",
    top: -16,
    padding: 10,
    borderRadius: 20,
  },
  step: {
    fontFamily: "suiteR",
  },
  stepend: {
    fontFamily: "cha",
    color: "#656565",
  },
});
