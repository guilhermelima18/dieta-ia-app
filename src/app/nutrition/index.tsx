import { Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useStepsStore } from "@/src/store/step-data";
import { api } from "@/src/libs/axios";
import { styles } from "@/src/styles/nutrition";

export default function Nutrition() {
  const { steps } = useStepsStore();
  /* const { data, isFetching, error } = useQuery({
    queryKey: ["nutrition"],
    queryFn: async () => {
      try {
        if (!steps) {
          throw new Error("Failed load nutrition");
        }

        const response = await api.post("/create", {
          name: steps.name,
          age: steps.age,
          gender: steps.gender,
          height: steps.height,
          weight: steps.weight,
          level: steps.level,
          objective: steps.objective,
        });

        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  }); */

  if (true) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Estamos gerando sua dieta!</Text>
        <Text style={styles.loadingText}>Aguarde um momento...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Dieta finalizada</Text>
    </View>
  );
}
