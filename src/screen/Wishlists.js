import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Wishlists = () => {
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 25 }}>Wishlists</Text>
    </View>
  );
};

export default Wishlists;
