import Home from "./screens/Home/Home.jsx";
import CreatePlan from "./screens/CreatePlan/CreatePlan.jsx";
import CreateContainPlan from "./screens/CreateContainPlan/CreateContainPlan.jsx";
import CreateContainDays from "./screens/CreateContainDays/CreateContainDays.jsx";
import ViewPlans from "./screens/ViewPlans/ViewPlans.jsx";
import UpdatePlans from "./screens/UpdatePlans/UpdatePlans.jsx";
import ViewExercises from "./screens/ViewExercises/ViewExercises.jsx";
import CreateExercise from "./screens/CreateExercise/CreateExercise.jsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Home} />
      <Stack.Screen name="Planes" component={ViewPlans} />
      <Stack.Screen name="Crear Plan" component={CreatePlan} />
      <Stack.Screen name="Contenido Plan" component={CreateContainPlan} />
      <Stack.Screen name="Contenido Dias" component={CreateContainDays} />
      <Stack.Screen name="Modificar Planes" component={UpdatePlans} />
      <Stack.Screen name="Ejercicios" component={ViewExercises} />
      <Stack.Screen name="Crear Ejercicio" component={CreateExercise} />
    </Stack.Navigator>
  );
};
export default Main;
