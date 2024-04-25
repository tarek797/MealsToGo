import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;

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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos.at(0) }} />
      <Card.Content>
        <Text>{name}</Text>
      </Card.Content>
    </RestaurantCard>
  );
};
