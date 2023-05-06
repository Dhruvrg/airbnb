import React, { useContext } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import userContext from "../Context/users/userContext";

const Profile = ({ navigation }) => {
  const context = useContext(userContext);
  const { logOut } = context;

  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          logOut();
          navigation.navigate("Login");
          Alert.alert("You have succefully logOut");
        }}
        style={styles.loginButtonStyle}
      >
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarStyle: {},
});

export default Profile;
