import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { useContext } from "react";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.at(3)};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space.at(3)};
  background-color: lightblue;
`;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantContext);

  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </>
  );
};
