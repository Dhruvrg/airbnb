import { useState } from "react";
import PlaceContext from "./placeContext";

const PlaceState = (props) => {
  const [allPlaces, setAllPlaces] = useState([]);
  const [type, setType] = useState("Mansions");
  const [test, setTest] = useState(false);

  const getPlaces = async () => {
    const response = await fetch("http://192.168.0.100:2000/get-places", {
      method: "GET",
    });
    const json = await response.json();
    setAllPlaces(json);
  };

  const getPlace = async (address) => {
    const response = await fetch("http://192.168.0.100:2000/get-place", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    });
    const json = await response.json();
    setAllPlaces(json);
    setTest(true);
  };

  return (
    <PlaceContext.Provider
      value={{ allPlaces, getPlaces, type, setType, test, setTest, getPlace }}
    >
      {props.children}
    </PlaceContext.Provider>
  );
};
export default PlaceState;
