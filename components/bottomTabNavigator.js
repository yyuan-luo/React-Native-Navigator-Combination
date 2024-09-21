import React from "react";
import {View, Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomePage = () => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>This is the home page</Text>
        </View>
    )
}

const TestPage = () => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>This is the test page</Text>
        </View>
    )
}

const { Navigator: BottomTabNavigator, Screen: BottomTabScreen } =
    createBottomTabNavigator();

const BottomNavigator = () => (
    <BottomTabNavigator>
        <BottomTabScreen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
        />
        <BottomTabScreen
            name="Test"
            component={TestPage}
            options={{ headerShown: false }}
        />
    </BottomTabNavigator>
);

export default BottomNavigator;
