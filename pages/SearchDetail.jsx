import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Box, InputLeftAddon } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ListComponent from "../components/ListComponent";

import datas from "../data.json";
import { useState } from "react";

export default function SearchDetail() {
  // const dt = datas.datas;

  // const firterData = dt.filter((e) => e.category === '')
  // const [data, setData] = useState([]);

  return (
    <View style={styles.searchDetailAll}>
      <View style={styles.searchCon}>
        <TextInput
          style={styles.sdtextInput}
          placeholder="검색어를 입력하세요"
        />
        <TouchableOpacity>
          <Icon name="search" size={20} color="#FE9E98" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchResultCon}>
        <Text style={styles.searchRTitle}>검색결과</Text>
        <View style={styles.searchSort}>
          <LinearGradient
            colors={["#FED2CF", "#DEE9FD"]}
            start={{ x: 1, y: 0.3 }}
            end={{ x: 0.3, y: 1 }}
            style={styles.sortTitleBack}
          >
            <TouchableOpacity>
              <Text style={styles.sortTitle}>인기순</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#FED2CF", "#DEE9FD"]}
            start={{ x: 1, y: 0.3 }}
            end={{ x: 0.3, y: 1 }}
            style={styles.sortTitleBack}
          >
            <TouchableOpacity>
              <Text style={styles.sortTitle}>최신순</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#FED2CF", "#DEE9FD"]}
            start={{ x: 1, y: 0.3 }}
            end={{ x: 0.3, y: 1 }}
            style={styles.sortTitleBack}
          >
            <TouchableOpacity>
              <Text style={styles.sortTitle}>추천순</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <ScrollView>
        <View style={styles.ResultElement}>
          <ListComponent />
          <ListComponent />
          <ListComponent />
          <ListComponent />
          <ListComponent />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  searchDetailAll: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  searchCon: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    paddingHorizontal: 12,
  },
  sdtextInput: {
    flex: 1,
    // width: "70%",
    height: 40,
    borderColor: "#555555",
    borderWidth: 0.5,
    borderStyle: "dotted",
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    marginRight: 20,
    paddingHorizontal: 8,
    fontFamily: "cha",
  },
  searchResultCon: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  searchRTitle: {
    fontSize: 16,
    fontFamily: "suiteB",
    color: "#FE9E98",
    paddingTop: 12,
  },
  searchSort: {
    flexDirection: "row",
  },
  sortTitleBack: {
    // flexDirection: "row",
    marginRight: 14,
    borderRadius: 20,
  },

  sortTitle: {
    // marginRight: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontFamily: "cha",
    fontSize: 12,
    color: "#656565",
  },
  ResultElement: {
    marginTop: 20,
  },
});
