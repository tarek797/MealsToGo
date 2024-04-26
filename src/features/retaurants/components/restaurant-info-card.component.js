import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import star from "../../../../assets/star";
import { SvgXml } from "react-native-svg";
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space.at(3)};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
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
        <Title>{name}</Title>
        <SvgXml xml={star} />
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};
