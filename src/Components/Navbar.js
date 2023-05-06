import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import userContext from "../Context/users/userContext";

const Navbar = () => {
  const context = useContext(userContext);
  const { inOrOut, setInOrOut } = context;

  const navigation = useNavigation();
  return (
    <View style={styles.navbarStyle}>
      <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
        <View style={styles.itemStyle}>
          <Icon style={styles.iconStyle} name="search" />
          <Text style={styles.textStyle}>Explore</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Wishlists")}>
        <View style={styles.itemStyle}>
          <Icon style={styles.iconStyle} name="codepen" />
          <Text style={styles.textStyle}>Wishlists</Text>
        </View>
      </TouchableOpacity>
      {inOrOut ? (
        <TouchableOpacity onPress={() => navigation.navigate("Inbox")}>
          <View style={styles.itemStyle}>
            <Icon style={styles.iconStyle} name="share" />
            <Text style={styles.textStyle}>Inbox</Text>
          </View>
        </TouchableOpacity>
      ) : null}
      {inOrOut ? (
        <TouchableOpacity onPress={() => navigation.navigate("Trips")}>
          <View style={styles.itemStyle}>
            <Icon style={styles.iconStyle} name="heart" />
            <Text style={styles.textStyle}>Trips</Text>
          </View>
        </TouchableOpacity>
      ) : null}
      {inOrOut ? (
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View style={styles.itemStyle}>
            <Icon style={styles.iconStyle} name="user" />
            <Text style={styles.textStyle}>Profile</Text>
          </View>
        </TouchableOpacity>
      ) : null}
      {inOrOut ? null : (
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Icon style={styles.iconStyle} name="user" />
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarStyle: {
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "#D3D3D3",
    justifyContent: "space-evenly",
    width: "100%",
    paddingVertical: "4%",
  },
  itemStyle: {
    display: "flex",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 10,
  },
  iconStyle: {
    fontSize: 25,
    color: "#808080",
    alignSelf: "center",
  },
});

export default Navbar;
