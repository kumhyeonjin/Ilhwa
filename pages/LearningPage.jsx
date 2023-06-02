import React from "react";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { Box, HStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function LearningPage({ navigation }) {
  const goLearningPageSec = () => {
    navigation.navigate("LearningPageSec", {});
  };
  //네비
  useEffect(() => {
    navigation.setOptions({
      title: "학습",
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

  //Modal
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LinearGradient
      colors={["#FFF2F2", "#DAE7FE", "#FFE7E7"]}
      locations={[0.2, 0.5, 0.8]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.learningPageBack}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalinBox}>
              <Text style={styles.modalText1}>정답입니다!</Text>

              <TouchableOpacity
                style={styles.modalText}
                onPress={goLearningPageSec}
              >
                <Text style={{ fontFamily: "suiteR" }}>다음 문제 풀기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalText}>
                <Text style={{ fontFamily: "suiteR" }}>학습화면 돌아가기</Text>
              </TouchableOpacity>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>닫기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.learingPageAll}>
        <TouchableOpacity style={styles.questionMark}>
          <Text style={styles.Mark}>?</Text>
        </TouchableOpacity>
        <View style={styles.questionCon}>
          <Text style={styles.question}>
            Q.다음 문장의 일본어 발음으로 알맞은 것을 고르세요.
          </Text>
          <Box style={styles.questionBox}>
            <Text style={styles.questionBoxK}>이것은 얼마입니까?</Text>
            <Text>これはいくらですか？</Text>
          </Box>
        </View>
        <View style={styles.answerBox}>
          <TouchableOpacity>
            <HStack style={styles.answerItem}>
              <Text style={styles.answerNum}>1</Text>
              <Text style={styles.answerText}>코레와이쿠라데스카</Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack style={styles.answerItem}>
              <Text style={styles.answerNum}>2</Text>
              <Text style={styles.answerText}>하지메마시떼</Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack style={styles.answerItem}>
              <Text style={styles.answerNum}>3</Text>
              <Text style={styles.answerText}>오하요고자이마스</Text>
            </HStack>
            <HStack style={styles.answerItem}>
              <Text style={styles.answerNum}>4</Text>
              <Text style={styles.answerText}>코레와난데스까</Text>
            </HStack>
          </TouchableOpacity>
        </View>
        {/* <HStack justifyContent="space-between"> */}
        <View style={styles.BtnWidth}>
          <TouchableOpacity style={styles.width1}>
            <Text style={styles.hintBtn}>힌트 보기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.width1}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.submissionBtn}>제출 하기</Text>
          </TouchableOpacity>
        </View>
        {/* </HStack> */}
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  //Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    boderWidth: 1,
    backgroundColor: "rgba(240, 240, 240, 0.8)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    width: 300,
    height: 200,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
    height: 220,
  },
  modalinBox: {
    width: "100%",
    // marginVertical: 16,
    alignItems: "center",
    // marginHorizontal: 16,
  },

  button: {
    borderRadius: 20,
    padding: 8,
    elevation: 2,
    width: 60,
    marginVertical: 12,
  },
  buttonClose: {
    backgroundColor: "#88B2FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText1: {
    marginBottom: 8,
    paddingVertical: 12,
    textAlign: "center",
    width: "100%",
    backgroundColor: "#88B2FF",
    fontFamily: "cha",
  },
  modalText: {
    marginBottom: 12,
    alignItems: "center",
    // borderWidth: 1,
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderStyle: "dotted",
  },
  //
  learningPageBack: {
    flex: 1,
  },
  learingPageAll: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  questionMark: {
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#A6C5FF",
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    top: 20,
  },
  questionCon: {
    // padding: 10,
    borderRadius: 5,
    marginTop: 48,
  },
  question: {
    fontSize: 16,
    fontFamily: "suiteR",
    marginBottom: 10,
  },
  questionBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 16,
  },
  questionBoxK: {
    marginBottom: 8,
    fontFamily: "cha",
  },
  answerItem: {
    alignItems: "center",
  },
  answerNum: {
    fontFamily: "suiteR",
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#88B2FF",
    width: 25,
    textAlign: "center",
    padding: 2,
  },
  answerText: {
    padding: 8,
    fontFamily: "suiteR",
  },
  learnPageBtns: {
    justifyContent: "space-around",
  },
  //   width: {
  //     flexDirection: "row",
  //     borderWidth: 1,
  //     borderColor: "red",
  //     width: "100%",
  //   },
  BtnWidth: {
    // borderWidth: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 28,
  },
  width1: {
    width: "45%",
  },

  hintBtn: {
    // borderWidth: 1,
    // borderColor: "blue",
    borderRadius: 16,
    backgroundColor: "#A6C5FF",
    textAlign: "center",
    fontFamily: "suiteR",
    fontSize: 16,
    padding: 8,
  },
  submissionBtn: {
    // borderWidth: 1,
    // borderColor: "yellow",
    borderRadius: 16,
    backgroundColor: "#FED2CF",
    textAlign: "center",
    fontFamily: "suiteR",
    fontSize: 16,
    padding: 8,
  },
});
