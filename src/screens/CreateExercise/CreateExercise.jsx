import { View, Text, TextInput, StyleSheet ,TouchableNativeFeedback} from "react-native";
import { actionSetExercises } from "../../../redux/reducers/reducerPlans";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const CreateExercise = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [series, setSeries] = useState("");
  const [reps, setReps] = useState("");

  const [exercise, setExercise] = useState({
    name: "",
    series: "",
    repetitions: "",
  });

  useEffect(() => {
    setExercise({
      name: name,
      series: series,
      repetitions: reps,
    });
  }, [name, series, reps]);

  function onCreateExercise() {
    dispatch(actionSetExercises(exercise));
    setName('');
    setSeries('');
    setReps('');
    navigation.navigate("Ejercicios");
  }

  return (
    <View style={style.container}>
      <Text style={style.label}>Nombre Ejercicio</Text>
      <TextInput
        name="name"
        value={name}
        onChangeText={(value) => setName(value)}
        style={style.input}
      />
      <Text style={style.label}>Series</Text>
      <TextInput
        name="series"
        keyboardType="numeric"
        value={series}
        onChangeText={(value) => setSeries(value)}
        style={style.input}
      />
      <Text style={style.label}>Repeticiones</Text>
      <TextInput
        name="repetitions"
        keyboardType="numeric"
        value={reps}
        onChangeText={(value) => setReps(value)}
        style={style.input}
      />
      <TouchableNativeFeedback>
        <Text style={style.btn} onPress={onCreateExercise}>
          Crear Ejercicio
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
    overflow: "hidden",
  },
  label: {
    fontSize: 20,
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
    overflow: "hidden",
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

export default CreateExercise;
