import React, { useContext, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import placeContext from "../Context/places/placeContext";
import PlaceItem from "../screen/PlaceItem";
import VirtualizedScrollView from "./VirtualizedScrollView";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Places = () => {
  const context = useContext(placeContext);
  const { allPlaces, getPlaces, type, setType, test, setTest } = context;

  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <View>
      <View style={styles.listStyle}>
        <TouchableOpacity
          onPress={() => {
            setType("Amazing views");
            setTest(false);
            getPlaces();
          }}
          style={styles.viewStyle}
        >
          <Icon style={styles.iconStyle} name="rocket" />
          <Text style={styles.textStyle}>Views</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType("Mansions");
            setTest(false);
            getPlaces();
          }}
          style={styles.viewStyle}
        >
          <Icon style={styles.iconStyle} name="foursquare" />
          <Text style={styles.textStyle}>Mansions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType("Amazing pools");
            setTest(false);
            getPlaces();
          }}
          style={styles.viewStyle}
        >
          <Icon style={styles.iconStyle} name="user" />
          <Text style={styles.textStyle}>Pools</Text>
        </TouchableOpacity>
      </View>

      <VirtualizedScrollView>
        <FlatList
          style={{ marginBottom: "100%" }}
          keyExtractor={(key) => {
            return key.id;
          }}
          data={allPlaces}
          renderItem={({ item }) => {
            return test ? (
              <PlaceItem item={item} />
            ) : item.type == type ? (
              <PlaceItem item={item} />
            ) : (
              ""
            );
          }}
        />
      </VirtualizedScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    display: "flex",
    flexDirection: "row",
    padding: 17.5,
    justifyContent: "space-evenly",
    borderBottomColor: "#808080",
    borderBottomWidth: 0.5,
  },
  textStyle: { marginHorizontal: 12.5, color: "#444444" },
  viewStyle: { alignItems: "center" },
  iconStyle: { color: "#808080", fontSize: 30 },
});

export default Places;
