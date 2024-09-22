import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// Profile Pages (Part of Profile Stack)
const ProfileScreen = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the Profile Page</Text>
        <Button title="Go to SubProfile" onPress={() => navigation.navigate('SubProfile')} />
    </View>
);

const SubProfileScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the SubProfile Page</Text>
    </View>
);

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: true }}
        />
        <ProfileStack.Screen
            name="SubProfile"
            component={SubProfileScreen}
            options={{ headerShown: true }}
        />
    </ProfileStack.Navigator>
);

export default ProfileStackNavigator;
