import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
import CardComponent from "../components/CardComponent";
import ListComponent from "../components/ListComponent";
import datas from "../data.json";
import { Entypo } from "@expo/vector-icons";
export default function ShopDetail({ navigation }) {
  const dt = datas.datas;

  const filterData = dt.filter((e) => e.category === "쇼핑");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(filterData);
  }, []);

  navigation.setOptions({
    title: "쇼핑",
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

  return (
    <View style={styles.shopPageAll}>
      <BackgroundImage
        source={require("../assets/shopBg.png")}
        style={styles.shopBg}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.rowScroll}
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </ScrollView>
      </BackgroundImage>
      <Text style={styles.essentialTitle}>쇼핑 필수 어휘</Text>
      <ScrollView>
        <View style={styles.essential}>
          <View>
            {data.map((item, i) => {
              return <ListComponent item={item} key={i} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  shopPageAll: {
    flex: 1,
  },

  shopBg: {
    width: "100%",
    height: 230,
    // height: "60%",
    // alignItems: "center",
    resizeMode: "cover",
    // paddingVertical: 16,
  },
  essential: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  essentialTitle: {
    fontFamily: "suiteB",
    fontSize: 16,
    marginTop: 8,
    marginLeft: 4,
    padding: 16,
  },
});
