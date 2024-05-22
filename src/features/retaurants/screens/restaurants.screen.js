import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import Search from "../components/search.component";
import { theme } from "../../../infrastructure/theme";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            color={theme.colors.brand.secondary}
          />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetail", { item });
              }}
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
