import React from "react";
import { View } from "react-native";
import Places from "../Components/Places";
import Search from "../Components/Search";

const Explore = () => {
  return (
    <View>
      <Search />
      <Places />
    </View>
  );
};

export default Explore;
