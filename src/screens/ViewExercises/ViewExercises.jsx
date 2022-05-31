import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const ViewExercises = () => {
  const Exercises = useSelector((state) => state.Plans.exercises);

  return (
    <>
      {Exercises?.map((exercise,index) => (
        <View key={index}>
          <Text>{exercise.name}</Text>
          <Text>{exercise.series}</Text>
          <Text>{exercise.repetitions}</Text>
          <Text></Text>
        </View>
      ))}
    </>
  );
};

export default ViewExercises;
