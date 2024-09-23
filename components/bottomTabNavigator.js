import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";
import searchScreen from "../screens/searchScreen";
import DrawerNavigator from "./drawerNavigator";

const { Navigator: BottomTabNavigator, Screen: BottomTabScreen } =
    createBottomTabNavigator();

const BottomNavigator = () => {
    const HomeDrawer = () => DrawerNavigator({tab: "home", mainScreen: HomeScreen})
    const SearchDrawer = () => DrawerNavigator({tab: "search", mainScreen: searchScreen})
    return (<BottomTabNavigator>
        <BottomTabScreen
            name="home"
            component={HomeDrawer}
            options={{headerShown: false}}
        />
        <BottomTabScreen
            name="search"
            component={SearchDrawer}
            options={{headerShown: false}}
        />
    </BottomTabNavigator>)
};

export default BottomNavigator;
