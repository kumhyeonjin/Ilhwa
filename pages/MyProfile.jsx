import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Box } from "native-base";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export default function MyProfile() {
  return (
    <View style={styles.myProfileAll}>
      <Box safeAreaTop />
      <LinearGradient
        colors={["#FFBBB7", "#9EBEF9"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderRadius: 10,

          overflow: "hidden",
        }}
      >
        <View style={styles.profile}>
          <Image
            source={require("../assets/user.png")}
            style={styles.userImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.userName}>ooo 님</Text>
            <TouchableOpacity>
              <Text style={styles.modify}>
                프로필 사진 변경하기
                <AntDesign name="right" size={12} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.InputBox}>
        <Text style={styles.myBoxTitle}>닉네임</Text>
        <View style={styles.rowBox}>
          <TextInput style={styles.nickInput} />
          <TouchableOpacity style={styles.overlapCheckBtn}>
            <Text style={styles.overlapCheckText}>중복확인</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.InputBox}>
        <Text style={styles.myBoxTitle}>이메일</Text>
        <View style={styles.emailBox}>
          <View style={styles.rowBox}>
            <TextInput style={styles.emailInput} placeholder="이메일" />
            <Text>@</Text>
            <TextInput style={styles.choiceInput} placeholder="선택" />
          </View>
        </View>
      </View>
      <View style={styles.InputBox}>
        <Text style={styles.myBoxTitle}>새 비밀번호</Text>
        <TextInput
          style={styles.lockInput}
          placeholder="새 비밀번호"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.lockInput}
          placeholder="비밀번호 확인"
          secureTextEntry={true}
        />
      </View>
      <LinearGradient
        colors={["#FFBBB7", "#9EBEF9"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderRadius: 10,
          width: "70%",
          justifyContent: "center",
          marginLeft: "15%",
          //   overflow: "hidden",
        }}
      >
        <TouchableOpacity style={styles.modifyBtn}>
          <Text style={styles.modifyText}>수정하기</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  myProfileAll: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    // marginVertical: 16,
    backgroundColor: "#fff",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "98%",
    borderRadius: 8,
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
  profileText: {
    marginTop: "5%",
    marginLeft: "5%",
    padding: 12,
  },
  modify: {
    paddingVertical: 8,
    fontFamily: "suiteR",
    color: "#4A4A4A",
  },
  InputBox: {
    // borderWidth: 0.5,
    // borderColor: "#FFA0A0",
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    // marginBottom: ,
    width: "100%",
  },
  myBoxTitle: {
    fontSize: 16,
    fontFamily: "suiteB",
    marginBottom: 8,
  },
  rowBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  nickInput: {
    flex: 1,
    borderWidth: 0.5,
    borderStyle: "dotted",
    // backgroundColor: "#F6F6F6",
    borderRadius: 4,
    height: 40,
    marginRight: 8,
  },
  overlapCheckBtn: {
    backgroundColor: "#656565",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  overlapCheckText: {
    color: "white",
    fontSize: 12,
  },
  emailInput: {
    // flex: 1,
    width: "45%",
    height: 40,
    borderWidth: 0.5,
    borderStyle: "dotted",
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  choiceInput: {
    height: 40,
    width: "40%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 8,
    paddingHorizontal: 8,
  },
  lockInput: {
    height: 40,
    borderWidth: 0.5,
    borderStyle: "dotted",
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  modifyBtn: {
    alignItems: "center",
    padding: 8,
  },
});
