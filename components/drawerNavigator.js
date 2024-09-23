import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import DrawerStackNavigator from "./drawerStackNavigator"; // Your drawer stack navigator

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Profile" onPress={() => props.navigation.navigate("profile-" + props.tab)} />
            <DrawerItem label="Notification" onPress={() => props.navigation.navigate("notification-" + props.tab)} />
        </DrawerContentScrollView>
    );
}

const DrawerNavigator = ({ tab, mainScreen }) => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} tab={tab} />}
        >
            <Drawer.Screen
                name={"stack-" + tab}
                options={{ headerShown: true }}
            >
                {(props) => <DrawerStackNavigator tab={tab} mainScreen={mainScreen} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
