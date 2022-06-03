import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const ViewPlains = () => {
  const Planes = useSelector((state) => state.Plans.plans);

  return (
    <>
      {Planes ? (
        Planes.map((plan, index) => (
          <View key={index}>
            <Text>{plan.name}</Text>
          </View>
        ))
      ) : (
        <Text>NO HAY PLANES</Text>
      )}
    </>
  );
};

export default ViewPlains;
