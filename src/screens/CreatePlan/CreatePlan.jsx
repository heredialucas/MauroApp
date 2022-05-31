import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionSetNamePlan } from "../../../redux/reducers/reducerPlans";

const CreatePlain = ({ navigation }) => {
  const dispatch = useDispatch();
  const [planName, setPlanName] = useState('')

  function onCreatePlan() {
    if(planName.trim().length > 0) {
      dispatch(actionSetNamePlan(planName.trim().toLowerCase()))
      setPlanName('')
      navigation.navigate('Contenido Plan') 
    }
  }
  return (
    <View style={style.container}>
      <Text style={style.label}>Nombre de Plan</Text>
      <TextInput value={planName} onChangeText={(value)=>setPlanName(value)} style={style.input} />
      <TouchableNativeFeedback>
        <Text style={style.btn} onPress={onCreatePlan}>
          Crear
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

export default CreatePlain;
