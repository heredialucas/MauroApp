import {View, Text, StyleSheet, Button } from "react-native";

import { useSelector } from "react-redux";

const CreateExercise = ({ navigation }) => {

  const Plan = useSelector((state) => state.Plans.plan);
  return (
    <>
      <View>
        <Button title="Lunes" onPress={()=> navigation.navigate('Contenido Dias', 'Lunes')}/>
        <Button title="Martes" onPress={()=> navigation.navigate('Contenido Dias', 'Martes')}/>
        <Button title="Miercoles" onPress={()=> navigation.navigate('Contenido Dias', 'Miercoles')}/>
        <Button title="Jueves" onPress={()=> navigation.navigate('Contenido Dias', 'Jueves')}/>
        <Button title="Viernes" onPress={()=> navigation.navigate('Contenido Dias', 'Viernes')}/>
        <Button title="Sabado" onPress={()=> navigation.navigate('Contenido Dias', 'Sabado')}/>
      </View>
      <Text></Text>
      {Plan ? <Text>{Plan.name}</Text> : null}
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CreateExercise;
