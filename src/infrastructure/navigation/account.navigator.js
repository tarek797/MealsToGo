import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
const AccountScreen = () => (
  <View>
    <Text>Account Screen</Text>
  </View>
);
const LoginScreen = () => (
  <View>
    <Text>Account Screen</Text>
  </View>
);

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
    </Stack.Navigator>
  );
};
export default AccountNavigator;
