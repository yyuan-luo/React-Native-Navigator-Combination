import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./bottomTabNavigator";

const AppNavigator = () => (
    <NavigationContainer>
        <BottomNavigator />
    </NavigationContainer>
);

export default AppNavigator;