import React from "react";
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from "@react-navigation/stack";

//페이지로 만든 컴포넌트들을 불러옵니다
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import SearchDetail from "../pages/SearchDetail";
import RoomDetail from "../pages/RoomDetail";
import ShopDetail from "../pages/ShopDetail";
import TrafficDetail from "../pages/TrafficDetail";
import EatDetail from "../pages/EatDetail";
import MyProfile from "../pages/MyProfile";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: {
        //   height:50,
        // },
        // 헤더 숨기기
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="SearchDetail" component={SearchDetail} />
      <Stack.Screen name="RoomDetail" component={RoomDetail} />
      <Stack.Screen name="ShopDetail" component={ShopDetail} />
      <Stack.Screen name="TrafficDetail" component={TrafficDetail} />
      <Stack.Screen name="EatDetail" component={EatDetail} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
