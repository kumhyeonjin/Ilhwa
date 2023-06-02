import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Box, HStack } from "native-base";
import { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Grid from "react-native-grid-component";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
//
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RoomDetail from "../pages/RoomDetail";
import ShopDetail from "../pages/ShopDetail";
//

export default function HomePage({ navigation }) {
  const goRoomDetail = () => {
    navigation.navigate("RoomDetail");
  };
  const goShopDetail = () => {
    navigation.navigate("ShopDetail");
  };
  const goTrafficDetail = () => {
    navigation.navigate("TrafficDetail");
  };
  const goEatDetail = () => {
    navigation.navigate("EatDetail");
  };

  useEffect(() => {
    navigation.setOptions({
      title: "홈",
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
      },
      headerShown: true,
      headerTitleAlign: "center",
      // headerBackTitleVisible: false,
    });
  });
  return (
    <ScrollView>
      <View style={styles.home}>
        <Box style={styles.homeSection1}>
          <Text style={styles.hsection1Title}>
            Tokyo Inside; 나의 학습 진도 현황
          </Text>
          <LinearGradient
            colors={["#FED2CF", "#CDDBF5"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.backColor}
          >
            <View style={styles.hsection1Con}>
              <View style={styles.separator}>
                <TouchableOpacity style={styles.hstudy}>
                  <Text style={styles.Sfont}>학습단계</Text>
                  <Text style={styles.numBorder}>1</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator2}>
                <TouchableOpacity style={styles.hwrong}>
                  <Text style={styles.Sfont}>틀린문제</Text>
                  <Text style={styles.numBorder}>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator3}>
                <TouchableOpacity style={styles.hsentence}>
                  <Text style={styles.Sfont}>담은문장</Text>
                  <Text style={styles.numBorder}>20</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </Box>
        <Box style={styles.homeSection2}>
          <View style={styles.hSection2Title}>
            <Text style={styles.hSectionName}>
              Tokyo Inside; 상황별 필수어휘
            </Text>
            <TouchableOpacity>
              <Text style={styles.hSection2_allbutton}>
                전체보기
                <AntDesign name="right" size={12} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
          <LinearGradient
            colors={["#FFF2F2", "#EAF1FD"]}
            start={{ x: 0.8, y: 0.3 }}
            end={{ x: 0.8, y: 0.9 }}
            style={styles.homeback}
          >
            <View
              // style={[
              //   styles.hSection2Con,
              //   { backgroundImage: require("../assets/homebg.png") },
              // ]}
              style={styles.hSection2Con}
            >
              <HStack>
                <View style={styles.h2ImageCon}>
                  <TouchableOpacity onPress={goEatDetail}>
                    <Image
                      source={require("../assets/food.png")}
                      style={styles.h2Image}
                      resizeMode="cover"
                    />
                    <Text style={styles.h2Text}>외식</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.h2ImageCon}>
                  <TouchableOpacity onPress={goRoomDetail}>
                    <Image
                      source={require("../assets/room.png")}
                      style={styles.h2Image}
                      resizeMode="cover"
                    />
                    <Text style={styles.h2Text}>숙박</Text>
                  </TouchableOpacity>
                </View>
              </HStack>

              <HStack>
                <View style={styles.h2ImageCon}>
                  <TouchableOpacity onPress={goTrafficDetail}>
                    <Image
                      source={require("../assets/bus.png")}
                      style={styles.h2Image}
                      resizeMode="cover"
                    />
                    <Text style={styles.h2Text}>교통</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.h2ImageCon}>
                  <TouchableOpacity onPress={goShopDetail}>
                    <Image
                      source={require("../assets/shop.png")}
                      style={styles.h2Image}
                      resizeMode="cover"
                    />
                    <Text style={styles.h2Text}>쇼핑</Text>
                  </TouchableOpacity>
                </View>
              </HStack>
            </View>
          </LinearGradient>
        </Box>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    width: "100%",
    // paddingHorizontal: 24,
    // marginVertical: 4,
    backgroundColor: "#FFFEFE",
  },
  homeSection1: { paddingTop: 24, paddingHorizontal: 24 },
  hsection1Title: {
    marginBottom: "8%",
    fontFamily: "suiteB",
    fontSize: 16,
    color: "#363636",
  },
  hsection1Con: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
  },
  homeback: {
    // flex:1,
    // elevation: -1,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 16,
  },
  backColor: {
    borderRadius: 8,
  },
  separator: {
    borderRightWidth: 1,
    borderRightColor: "#656565",
    paddingRight: 12,
  },
  separator2: {
    borderRightWidth: 1,
    borderRightColor: "#656565",
    paddingRight: 12,
  },
  separator3: {
    paddingRight: 4,
  },
  Sfont: {
    fontFamily: "cha",
  },
  hstudy: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  hwrong: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  hsentence: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },

  numBorder: {
    borderWidth: 1,
    borderColor: "#B6B6B6",
    width: "100%",
    // borderRadius: "50%",
    textAlign: "center",
    // alignItems: "center",
    margin: 4,
    borderRadius: 100,
    fontFamily: "cha",
  },
  homeSection2: {
    paddingTop: 24,
    // backgroundImage: require("../assets/homebg.png"),
    elevation: -1,
    // paddingHorizontal: 24,
  },
  hSection2Title: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  hSectionName: {
    fontFamily: "suiteB",
    fontSize: 16,
    color: "#363636",
  },
  hSection2_allbutton: {
    fontFamily: "suiteB",
    fontSize: 12,
    color: "#525252",
  },
  hSection2Con: {
    marginTop: "7%",
    //
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 24,
  },
  h2ImageCon: {
    width: 180,
    height: 150,
    marginBottom: 40,
    borderRadius: 10,
    alignItems: "center",
  },
  h2Image: {
    width: 160,
    height: 150,
    // overflow: "hidden",
    borderWidth: 3,
    borderRadius: 30,
    ////
  },
  h2Text: {
    textAlign: "center",
    marginVertical: 8,
    fontFamily: "cha",
  },
});
