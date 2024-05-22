import { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = () => {
  const { favourites, addToFavourites, removeFromFavourties } =
    useContext(FavouritesContext);
  return (
    <FavouriteButton>
      <AntDesign name="heart" size={24} color="red" />
    </FavouriteButton>
  );
};
