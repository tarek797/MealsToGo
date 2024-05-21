import { View, Text } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
export const RestaurantDetail = ({ route }) => {
  const { item } = route.params;
  return (
    <View>
      <RestaurantInfoCard restaurant={item} />
    </View>
  );
};
