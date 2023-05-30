import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Input } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
//
// import * as Font from "expo-font";
//Image~
const SignInBg = require("../assets/signInBg.png");
const SignInLogo = require("../assets/signinLogo.png");
const Kakao = require("../assets/kakao.png");
const Google = require("../assets/google.png");
const Facebook = require("../assets/facebook.png");
//

export default function SignInPage({ navigation }) {
  const goHome = () => {
    navigation.navigate("TabNavigator", {});
  };
  useEffect(() => {
    navigation.setOptions({
      title: "로그인",
    });
  });
  return (
    <>
      <ImageBackground source={SignInBg} style={styles.SignInBack}>
        <Image source={SignInLogo} style={styles.SignLogo} />
        <View style={styles.InputCon}>
          <Input
            style={styles.LogInput}
            placeholder="ID를 입력해주세요"
            placeholderTextColor="#fff"
            fontFamily="cha"
            borderWidth={0}
          />
          <Input
            style={styles.LogInput}
            placeholder="PASSWORD를 입력해주세요"
            placeholderTextColor="#fff"
            fontFamily="cha"
            borderWidth={0}
          />
          <TouchableOpacity onPress={goHome}>
            <LinearGradient
              colors={["#FED2CF", "#CDDBF5"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.Button}
            >
              <Text style={styles.LoginBtnText}>로그인</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.PerNavi}>
            <TouchableOpacity>
              <Text style={styles.perText}>아이디 찾기</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.perText}>비밀번호 찾기</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.perText}>회원가입</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.snsLogin}>
            <Text style={styles.perText}>간편로그인</Text>
            <TouchableOpacity style={styles.snsCon}>
              <Image source={Kakao} style={styles.Sns} />
              <Image source={Google} style={styles.Sns} />
              <Image source={Facebook} style={styles.Sns} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  SignInBack: {
    flex: 1,
    width: "100%",
    objectFit: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  SignLogo: {
    position: "absolute",
    top: 110,
    resizeMode: "contain",
  },
  InputCon: {
    width: "80%",
    marginTop: "30%",
  },
  LogInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginBottom: 24,
    paddingVertical: 12,
    fontSize: 16,
  },
  Button: {
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: "center",
  },
  LoginBtnText: {
    color: "#2C2C2C",
    fontSize: 16,
    // fontWeight: "light",
  },
  PerNavi: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  perText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  snsLogin: {
    alignItems: "center",
    marginTop: 16,
  },
  snsCon: {
    flexDirection: "row",
    marginTop: 28,
  },
  Sns: {
    width: 40,
    height: 40,
    marginLeft: 8,
  },
});
