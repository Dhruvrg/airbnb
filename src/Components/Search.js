import React, { useContext, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import placeContext from "../Context/places/placeContext";

const Search = () => {
  const context = useContext(placeContext);
  const { getPlace, test, setTest } = context;
  const [inpValue, setInpValue] = useState("");

  return (
    <View style={styles.searchStyle}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        placeholder="Anywhere"
        onChangeText={(value) => {
          setTest(true);
          test ? setInpValue(value) : setInpValue("");
          test ? getPlace(value) : "";
        }}
        value={inpValue}
      />
      <View style={styles.circleStyle}>
        <Icon name="filter" style={styles.iconStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchStyle: {
    marginTop: "7.5%",
    height: "7%",
    marginHorizontal: "7.5%",
    borderRadius: 50,
    borderWidth: 0.5,
    border: "#D3D3D3",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: 10,
    paddingLeft: 25,
  },
  circleStyle: {
    borderRadius: 50,
    borderWidth: 0.5,
    border: "#D3D3D3",
    width: 35,
    height: 35,
    position: "absolute",
    right: 7.5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    fontSize: 20,
    color: "black",
  },
});

export default Search;
