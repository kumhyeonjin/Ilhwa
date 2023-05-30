import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Box } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
export default function StudyPage({ navigation }) {
  const goSearchDetail = () => {
    navigation.navigate("SearchDetail", {});
  };
  //

  return (
    <Box style={styles.searchAll}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.stextInput}
          placeholder="검색어를 입력하세요"
        />
        <TouchableOpacity onPress={goSearchDetail}>
          <Icon name="search" size={20} color="#FE9E98" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchEx}>
        <Text style={styles.searchExTitle}>이렇게 검색해 보세요!</Text>
        <View style={styles.keyword}>
          <LinearGradient
            colors={["#DEE9FD", "#FED2CF"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.keywordBox}
          >
            <Text style={styles.keywordText}>키워드1</Text>
          </LinearGradient>
          <LinearGradient
            colors={["#FED2CF", "#DEE9FD"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.keywordBox}
          >
            <Text style={styles.keywordText}>키워드2</Text>
          </LinearGradient>
          <LinearGradient
            colors={["#DEE9FD", "#FED2CF"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.keywordBox}
          >
            <Text style={styles.keywordText}>키워드3</Text>
          </LinearGradient>
          <LinearGradient
            colors={["#DEE9FD", "#FED2CF"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.keywordBox}
          >
            <Text style={styles.keywordText}>키워드4</Text>
          </LinearGradient>
          {/* <Text style={styles.keywordText}>키워드4</Text> */}
        </View>
      </View>
      <View style={styles.hotsearch}>
        <Text style={styles.hotsearchTitle}>인기 검색어</Text>
        <LinearGradient
          colors={["#FED2CF", "#DEE9FD"]}
          start={{ x: 1, y: 0.3 }}
          end={{ x: 0.3, y: 1 }}
          style={styles.hotsearchListBox}
        >
          <Text style={styles.hotsearchList}>1. 리스트</Text>
          <Text style={styles.hotsearchList}>2. 리스트</Text>
          <Text style={styles.hotsearchList}>3. 리스트</Text>
          <Text style={styles.hotsearchList}>4. 리스트</Text>
          <Text style={styles.hotsearchList}>5. 리스트</Text>
        </LinearGradient>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  searchAll: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#FFFEFE",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    paddingHorizontal: 12,
  },
  stextInput: {
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
  searchEx: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchExTitle: {
    fontSize: 16,
    fontFamily: "suiteB",
    marginBottom: 8,
    color: "#FE9E98",
  },
  keywordBox: {
    borderRadius: 16,
    height: 30,
    marginLeft: 8,
  },
  keyword: {
    flexDirection: "row",
    marginTop: 8,
  },
  keywordText: {
    // borderWidth: 1,
    // borderColor: "gray",
    // borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    textAlign: "center",
    fontFamily: "cha",
    color: "#555555",
  },
  hotsearch: {
    paddingHorizontal: 16,
    // marginBottom: 16,
    marginVertical: 24,
  },
  hotsearchTitle: {
    fontSize: 16,
    fontFamily: "suiteB",
    marginBottom: 8,
    color: "#FE9E98",
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowColor: "black",
  },
  hotsearchListBox: {
    borderRadius: 16,
    height: 300,
  },
  hotsearchList: {
    padding: 12,
    margin: 8,
    fontFamily: "cha",
    color: "#555555",
  },
});
