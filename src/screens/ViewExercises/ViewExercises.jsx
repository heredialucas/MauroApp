import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const ViewExercises = () => {
  const Exercises = useSelector((state) => state.Plans.exercises);

  return (
    <>
      {Exercises?.map((exercise, index) => (
        <View key={index}>
          <Text>Nombre: {exercise.name}</Text>
          <Text>Series: {exercise.series}</Text>
          <Text>Repeticiones: {exercise.repetitions}</Text>
          <Text>Peso: {`${exercise.weightMin} - ${exercise.weightMax}`}</Text>
          <Text></Text>
        </View>
      ))}
    </>
  );
};

export default ViewExercises;
