import { View, Text, TextInput, StyleSheet ,TouchableNativeFeedback, Alert} from "react-native";
import { actionSetExercises } from "../../../redux/reducers/reducerPlans";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const CreateExercise = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [series, setSeries] = useState("");
  const [reps, setReps] = useState("");
  const [weightMin, setWeightMin] = useState("");
  const [weightMax, setWeightMax] = useState("");

  const [exercise, setExercise] = useState({
    name: "",
    series: "",
    repetitions: "",
    weight: "",
  });

  useEffect(() => {
    setExercise({
      name: name,
      series: series,
      repetitions: reps,
      weightMin: weightMin,
      weightMax: weightMax,
    });
  }, [name, series, reps, weightMin, weightMax]);

  function onCreateExercise() {
    if(name === "" || series === "" || reps === "" || weightMin === "" || weightMax === ""){
      Alert.alert("Error", "Todos los campos son obligatorios");
    }else{
      dispatch(actionSetExercises(exercise));
      setName('');
      setSeries('');
      setReps('');
      setWeightMin('');
      setWeightMax('');
      navigation.navigate("Ejercicios");
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.label}>Nombre Ejercicio</Text>
      <TextInput
        name="name"
        value={name}
        onChangeText={(value) => setName(value)}
        style={style.input}
        required
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
      <Text style={style.label}>Peso Minimo</Text>
      <TextInput
        name="weightMin"
        keyboardType="numeric"
        value={weightMin}
        onChangeText={(value) => setWeightMin(value)}
        style={style.input}
      />
      <Text style={style.label}>Peso Maximo</Text>
      <TextInput
        name="weightMax"
        keyboardType="numeric"
        value={weightMax}
        onChangeText={(value) => setWeightMax(value)}
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
