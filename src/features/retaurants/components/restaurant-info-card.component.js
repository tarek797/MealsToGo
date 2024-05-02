import { Card } from "react-native-paper";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
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
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.at(2)};
  padding-bottom: ${(props) => props.theme.space.at(2)};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const RestaurantInfoCard = ({ retaurant = {} }) => {
  const {
    name = "some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = ["100 some random street"],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = retaurant;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos.at(0) }} />
      <Card.Content>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer position="left" size="large" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position="left" size="large" />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};
