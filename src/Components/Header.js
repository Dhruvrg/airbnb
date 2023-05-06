import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headStyle}>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        AirBnb
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headStyle: {
    height: 70,
    backgroundColor: "black",
    paddingTop: 40,
    paddingLeft: 25,
  },
});

export default Header;
