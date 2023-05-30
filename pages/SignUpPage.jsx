import React from "react";
import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
export default function SignUpPage() {
  useEffect(() => {
    navigation.setOptions({ title: "회원가입" });
  }, []);
  return (
    <View>
      <Text>페이지 제목</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
