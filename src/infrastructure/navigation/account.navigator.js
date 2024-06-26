import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../../features/account/screens/register.screen";
import LoginScreen from "../../features/account/screens/login.screen";
import AccountScreen from "../../features/account/screens/account.screen";

const Stack = createStackNavigator();
const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
export default AccountNavigator;
