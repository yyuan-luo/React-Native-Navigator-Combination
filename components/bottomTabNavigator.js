import React from "react";
import {View, Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStackNavigator from "./profileStackNavigator";

const HomePage = () => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>This is the home page</Text>
        </View>
    )
}

const SearchPage = () => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>This is the search page</Text>
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
            name="Search"
            component={SearchPage}
            options={{ headerShown: false }}
        />
        <BottomTabScreen
            name="Profile"
            component={ProfileStackNavigator}
            options={{
                tabBarButton: () => null, // Hide the tab
                tabBarVisible: false, // In some versions of React Navigation, use this too
                headerShown: false, // Hide the header if desired
            }}
        />
    </BottomTabNavigator>
);

export default BottomNavigator;
