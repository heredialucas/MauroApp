import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
} from "react-native";
import { actionSetPlan } from "../../../redux/reducers/reducerPlans";
import { useSelector, useDispatch } from "react-redux";

const CreateExercise = ({ navigation }) => {
  const dispatch = useDispatch();
  const Plan = useSelector((state) => state.Plans.plan);
  const Days = useSelector((state) => state.Plans.days);
  const finalPlan = { ...Plan, Days };

  function onCreatePlan() {
    dispatch(actionSetPlan(finalPlan));
    navigation.navigate("Planes");
  }

  return (
    <>
      <View>
        <Button
          title="Lunes"
          onPress={() => navigation.navigate("Contenido Dias", "Lunes")}
        />
        <Button
          title="Martes"
          onPress={() => navigation.navigate("Contenido Dias", "Martes")}
        />
        <Button
          title="Miercoles"
          onPress={() => navigation.navigate("Contenido Dias", "Miercoles")}
        />
        <Button
          title="Jueves"
          onPress={() => navigation.navigate("Contenido Dias", "Jueves")}
        />
        <Button
          title="Viernes"
          onPress={() => navigation.navigate("Contenido Dias", "Viernes")}
        />
        <Button
          title="Sabado"
          onPress={() => navigation.navigate("Contenido Dias", "Sabado")}
        />
      </View>
      <Text></Text>
      {Plan ? <Text>{Plan.name}</Text> : null}
      <TouchableNativeFeedback>
        <Text style={style.btn} onPress={onCreatePlan}>
          CREAR PLAN
        </Text>
      </TouchableNativeFeedback>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
