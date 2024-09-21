import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./drawerNavigator";

const AppNavigator = () => (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
);

export default AppNavigator;