import { TouchableNativeFeedback, View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { actionSetDayPlan } from "../../../redux/reducers/reducerPlans";

const CreateContainDays = ({ route, navigation }) => {
  const selectedExercises = [];
  const dispatch = useDispatch();

  const Exercises = useSelector((state) => state.Plans.exercises);

  const day = route.params;

  const onSetExercise = (exercise) => {
    selectedExercises.push(exercise);
    console.log(selectedExercises);
  };

  const onCreateDay = () => {
    console.log("FUNCIONA");
    dispatch(
      actionSetDayPlan({
        day: day,
        exercises: selectedExercises,
      })
    );
  };

  return (
    <>
      <Text>HOLA DESDE CreateContainDays</Text>
      <Text></Text>
      {Exercises.length > 0 &&
        Exercises.map((exercise, index) => (
          <TouchableNativeFeedback
            key={index}
            onPress={() => onSetExercise(exercise)}
          >
            <View style={{ backgroundColor: "#888" }}>
              <Text>{exercise.name}</Text>
              <Text>{exercise.series}</Text>
              <Text>{exercise.repetitions}</Text>
              <Text></Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      <Button title="Crear Día" onPress={onCreateDay} />
    </>
  );
};

export default CreateContainDays;
