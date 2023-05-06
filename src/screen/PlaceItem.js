import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const PlaceItem = ({ item }) => {
  const { address, price, id, url, away, date } = item;
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: url }} />
      <Text
        style={[
          styles.addressStyle,
          { marginBottom: "0.25%", marginTop: "1.5%" },
        ]}
      >
        {address}
      </Text>
      <Text style={{ marginVertical: "0.25%" }}>{away}</Text>
      <Text style={{ marginVertical: "0.25%" }}>{date}</Text>
      <Text style={[styles.priceStyle, { marginVertical: "0.25%" }]}>
        Rs.{price} night
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 300,
    borderRadius: 12.5,
  },
  containerStyle: {
    margin: "7.55%",
    height: 350,
  },
  addressStyle: {
    fontWeight: "bold",
  },
  priceStyle: {
    fontWeight: "bold",
  },
});

export default PlaceItem;
