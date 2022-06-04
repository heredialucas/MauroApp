import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";

const ViewPlains = () => {
  const Planes = useSelector((state) => state.Plans.plans);
  console.log(Planes)

  return (
    <ScrollView>
      {Planes ? (
        Planes.map((plan, index) => (
          <View key={index}>
            <Text>{plan.name}</Text>
            {plan.Days.map((day, index) => (
              <View key={index}>
                <Text>Dia: {day.day}</Text>
                {day.exercises.map((exercise, index) => (
                  <View key={index}>
                    <Text>Nombre: {exercise.name}</Text>
                    <Text>Series: {exercise.series}</Text>
                    <Text>Repeticiones: {exercise.repetitions}</Text>
                    <Text>Peso: {`${exercise.weightMin} - ${exercise.weightMax}`}</Text>
                    <Text></Text>
                </View>
            ))}
              </View>
        ))}
          </View>
      ))
      ) : (
        <Text>NO HAY PLANES</Text>
      )}
    </ScrollView>
  );
};

export default ViewPlains;
