import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../../src/features/retaurants/screens/restaurants.screen";
import { Text } from "react-native";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="RestaurantsCards"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>RestaurantDetail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
