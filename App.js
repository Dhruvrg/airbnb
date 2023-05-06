import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "./src/screen/Explore";
import Wishlists from "./src/screen/Wishlists";
import Trips from "./src/screen/Trips";
import Inbox from "./src/screen/Inbox";
import Profile from "./src/screen/Profile";
import Login from "./src/screen/Login";
import Navbar from "./src/Components/Navbar";
import PlaceState from "./src/Context/places/PlaceState";
import UserState from "./src/Context/users/UserState";
import Header from "./src/Components/Header";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <UserState>
      <PlaceState>
        <NavigationContainer>
          <Header />
          <Stack.Navigator initialRouteName="Explore">
            <Stack.Screen
              options={{ headerShown: false }}
              name="Explore"
              component={Explore}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Wishlists"
              component={Wishlists}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Trips"
              component={Trips}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Inbox"
              component={Inbox}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Profile"
              component={Profile}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
          <Navbar />
        </NavigationContainer>
      </PlaceState>
    </UserState>
  );
}
