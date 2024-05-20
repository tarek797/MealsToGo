import { ActivityIndicator, Searchbar } from "react-native-paper";
import { FlatList, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { useContext } from "react";
import { theme } from "../../../infrastructure/theme";
import Search from "../components/search.component";


const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space.at(3)};
  background-color: lightblue;
`;

const LoadingContainer = styled.View`
  position: "absolute";
  top: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  if (isLoading)
    return (
      <SafeArea>
        <LoadingContainer>
          <ActivityIndicator
            size={50}
            animating={true}
            color={theme.colors.brand.secondary}
          />
        </LoadingContainer>
      </SafeArea>
    );
  return (
    <>
      <Search/>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </>
  );
};
