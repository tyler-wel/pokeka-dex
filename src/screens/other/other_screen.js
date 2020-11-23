import React from "react";
import { Button, View, Text } from "react-native";

function OtherScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Other</Text>

      {/* <Button title="Go Home" onPress={() => navigation.navigate("MyCollection")} /> */}
    </View>
  );
}

export default OtherScreen;
