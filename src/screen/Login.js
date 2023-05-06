import React, { useContext, useState } from "react";
import userContext from "../Context/users/userContext";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const Login = ({ navigation }) => {
  const context = useContext(userContext);
  const { inOrOut, setInOrOut, login } = context;
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.loginFormStyle}>
      <View>
        <Text>Enter Your Phone Number : </Text>
        <TextInput
          style={styles.phoneNoStyle}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => setPhoneNo(value)}
        />
      </View>
      <View>
        <Text>Enter Your email id : </Text>
        <TextInput
          style={styles.emailStyle}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (phoneNo == "") Alert.alert("Enter a valid phoneNo");
          if (email == "") Alert.alert("Enter a valid email id");
          if (email != "" && phoneNo != "") {
            login(phoneNo, email);
            navigation.navigate("Explore");
            Alert.alert("You have succefully login");
          }
        }}
        style={styles.loginButtonStyle}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneNoStyle: {
    borderWidth: 1,
    height: 35,
    width: 250,
    padding: 10,
  },
  emailStyle: {
    borderWidth: 1,
    height: 35,
    width: 250,
    padding: 10,
  },
  loginFormStyle: {
    height: "80%",
    justifyContent: "center",
    alignSelf: "center",
    display: "flex",
    gap: 25,
  },
  loginButtonStyle: {
    alignSelf: "center",
    margin: 25,
  },
});

export default Login;
