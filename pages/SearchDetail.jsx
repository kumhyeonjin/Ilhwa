import React from "react";
import { useState } from "react";
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

export default function SearchDetail() {
  const dt = datas.datas;

  const [data, setData] = useState([]);

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
                저것 좀 보여 주시겠습니까?
              </Text>
            </View>
            <View style={styles.halfbox2}>
              <Text
                style={styles.japanesText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                あれを 見せて いただけますか
              </Text>
              <Text
                style={styles.koreanPronunce}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                아레오 미세떼 이따다께마스까.
              </Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <AntDesign size={20} color="#FE9E98" />
            </TouchableOpacity>
          </Box>
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
                저것 좀 보여 주시겠습니까?
              </Text>
            </View>
            <View style={styles.halfbox2}>
              <Text
                style={styles.japanesText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                あれを 見せて いただけますか
              </Text>
              <Text
                style={styles.koreanPronunce}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                아레오 미세떼 이따다께마스까.
              </Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <AntDesign size={20} color="#FE9E98" />
            </TouchableOpacity>
          </Box>
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
                저것 좀 보여 주시겠습니까?
              </Text>
            </View>
            <View style={styles.halfbox2}>
              <Text
                style={styles.japanesText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                あれを 見せて いただけますか
              </Text>
              <Text
                style={styles.koreanPronunce}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                아레오 미세떼 이따다께마스까.
              </Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <AntDesign size={20} color="#FE9E98" />
            </TouchableOpacity>
          </Box>
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
                저것 좀 보여 주시겠습니까?
              </Text>
            </View>
            <View style={styles.halfbox2}>
              <Text
                style={styles.japanesText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                あれを 見せて いただけますか
              </Text>
              <Text
                style={styles.koreanPronunce}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                아레오 미세떼 이따다께마스까.
              </Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <AntDesign size={20} color="#FE9E98" />
            </TouchableOpacity>
          </Box>
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
                저것 좀 보여 주시겠습니까?
              </Text>
            </View>
            <View style={styles.halfbox2}>
              <Text
                style={styles.japanesText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                あれを 見せて いただけますか
              </Text>
              <Text
                style={styles.koreanPronunce}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                아레오 미세떼 이따다께마스까.
              </Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <AntDesign size={20} color="#FE9E98" />
            </TouchableOpacity>
          </Box>
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
                저것 좀 보여 주시겠습니까?
              </Text>
            </View>
            <View style={styles.halfbox2}>
              <Text
                style={styles.japanesText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                あれを 見せて いただけますか
              </Text>
              <Text
                style={styles.koreanPronunce}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                아레오 미세떼 이따다께마스까.
              </Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <AntDesign size={20} color="#FE9E98" />
            </TouchableOpacity>
          </Box>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  searchDetailAll: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
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
