import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
export const RestaurantInfoCard = ({ retaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = ["100 some random street"],
    isOpenNow = true,
    rating = 4,
    isClosedTemporari,
  } = retaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        source={{ uri: photos.at(0) }}
        style={styles.cover}
      />
      <Card.Content>
        <Text>{name}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
