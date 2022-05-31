import { View, StyleSheet, TouchableNativeFeedback, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={style.container}>
        <TouchableNativeFeedback onPress={() => navigation.navigate("Planes")}>
          <Text style={style.btn}>Planes</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("Crear Plan")}
        >
          <Text style={style.btn}>Crear Plan</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("Ejercicios")}
        >
          <Text style={style.btn}>Ejercicios</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("Crear Ejercicio")}
        >
          <Text style={style.btn}>Crear Ejercicio</Text>
        </TouchableNativeFeedback>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#00a680",
    fontSize: 30,
    padding: 10,
    borderRadius: 5,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    overflow: "hidden",
  },
});

export default Home;
