import React from "react";
import {View, Text} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigator from "./bottomTabNavigator";

const UserPage = () => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>This is the user page</Text>
        </View>
    )
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Start">
            <Drawer.Screen
                name="start"
                component={BottomNavigator}
                options={{ headerShown: true }}
            />
            <Drawer.Screen
                name="user"
                component={UserPage}
                options={{ headerShown: true }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
