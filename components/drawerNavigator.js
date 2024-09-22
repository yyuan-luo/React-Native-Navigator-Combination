import React from "react";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import BottomNavigator from "./bottomTabNavigator";

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Profile" onPress={() => props.navigation.navigate("Profile")}/>
        </DrawerContentScrollView>
    );
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
                name="start"
                component={BottomNavigator}
                options={{ headerShown: true }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
