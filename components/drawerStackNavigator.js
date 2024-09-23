import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import NotificationScreen from "../screens/notificationScreen";
import ProfileScreen from "../screens/profileScreen";

const Stack = createStackNavigator();

const DrawerStackNavigator = ({tab, mainScreen}) => {
    return (
        <Stack.Navigator initialRouteName={"main-" + tab}>
            <Stack.Screen
                name={"main-" + tab}
                component={mainScreen}
                options={{headerShown: true}}
            />
            <Stack.Screen
                name={"profile-" + tab}
                component={ProfileScreen}
                options={{headerShown: true}}
            />
            <Stack.Screen
                name={"notification-" + tab}
                component={NotificationScreen}
                options={{headerShown: true}}
            />
        </Stack.Navigator>
    )
};

export default DrawerStackNavigator;
