import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        width: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: blue,
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontSize: "bold",
          color: "white",
        }}
      >
        INDMO
      </Text>
      <Text
        style={{
          paddingTop: 20,
          fontSize: 30,
          color: "yellow",
        }}
      ></Text>
      <Text>Ola Mundo ola</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "blue",
  },
});
