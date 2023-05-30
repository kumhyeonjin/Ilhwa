import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Box } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
//
import { AntDesign } from "@expo/vector-icons";
//
export default function MyPage() {
  return (
    <View style={styles.mypageAll}>
      <LinearGradient
        colors={["#FFBBB7", "#9EBEF9"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderRadius: 10,

          overflow: "hidden",
        }}
      >
        <View style={styles.myProfile}>
          <Image
            source={require("../assets/user.png")}
            style={styles.userImage}
          />
          <View style={styles.myProfileText}>
            <Text style={styles.userName}>ooo 님</Text>
            <TouchableOpacity>
              <Text style={styles.logout}>
                로그아웃
                <AntDesign name="right" size={12} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.studyBox}>
        <LinearGradient
          colors={["#FED2CF", "#CDDBF5"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBackground}
        >
          <Text style={styles.studyBoxText}>매일 발전하는 일본어!</Text>
          <Text style={styles.studyBoxText}>일화와 함께 학습해보세요!</Text>
          <TouchableOpacity style={styles.myProgress}>
            <Text style={styles.myProgressText}>학습 진도 확인하기</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.goProfile}>
        <Text style={styles.myText}>내 프로필</Text>
        <TouchableOpacity>
          <AntDesign name="rightcircleo" size={24} color="#B8CFF9" />
        </TouchableOpacity>
      </View>

      <View style={styles.goStudy}>
        <View style={styles.studyContent1}>
          <Text style={styles.myText}>담은 문장</Text>
          <TouchableOpacity>
            <AntDesign name="rightcircleo" size={24} color="#FFBFBB" />
          </TouchableOpacity>
        </View>
        <View style={styles.studyContent2}>
          <Text style={styles.myText}>틀린 문제</Text>
          <TouchableOpacity>
            <AntDesign name="rightcircleo" size={24} color="#FFBFBB" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mypageAll: {
    flex: 1,
    paddingHorizontal: 24,
    // marginVertical: 16,
    backgroundColor: "#fff",
  },
  myProfile: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "98%",
    // borderWidth: 2,
    // borderColor: "red",
    borderRadius: 8,
    // margin: 4,
    marginVertical: 2,
    marginHorizontal: 3,
  },

  userName: {
    fontFamily: "suiteB",
    fontSize: 16,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  myProfileText: {
    marginTop: "5%",
    marginLeft: "5%",
    padding: 12,
  },
  logout: {
    paddingVertical: 8,
    fontFamily: "suiteR",
    color: "#4A4A4A",
  },
  studyBox: {
    // borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 16,
    // width: "100%",
    // alignItems: "center",
  },
  studyBoxText: {
    marginVertical: 4,
    textAlign: "center",
    padding: 8,
    fontFamily: "suiteB",
    color: "#656565",
  },
  myProgress: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 12,
    width: "40%",
    alignSelf: "center",
  },
  myProgressText: {
    color: "#2C2C2C",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "suiteR",
  },
  goProfile: {
    borderWidth: 1,
    borderColor: "#B9D0FB",
    borderRadius: 20,
    padding: 10,
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goStudy: {
    borderWidth: 1,
    borderColor: "#FFBFBB",
    borderRadius: 20,
    padding: 8,
    marginVertical: 16,
  },
  studyContent1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: "#FF7E7E",
    borderStyle: "dotted",
    alignItems: "center",
  },
  studyContent2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    alignItems: "center",
  },
  myText: {
    fontFamily: "suiteR",
    color: "#2C2C2C",
  },
});
