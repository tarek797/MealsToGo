import { Searchbar } from "react-native-paper";
import { StatusBar } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.SafeAreaView`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: lightblue;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
