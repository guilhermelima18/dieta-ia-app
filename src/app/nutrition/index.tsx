import { Pressable, ScrollView, Share, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useStepsStore } from "@/src/store/step-data";
import { styles } from "@/src/styles/nutrition";
import { useDiet } from "@/src/hooks/use-diet";
import { Link, router } from "expo-router";
import { Header } from "@/src/components/header";
import { Ionicons, Feather } from "@expo/vector-icons";
import { colors } from "@/src/theme/colors";

export default function Nutrition() {
  const { steps } = useStepsStore();
  const { createDiet } = useDiet();

  const { data, isFetching, error } = useQuery({
    queryKey: ["nutrition"],
    queryFn: async () =>
      createDiet({
        name: steps.name,
        age: steps.age,
        gender: steps.gender,
        height: steps.height,
        weight: steps.weight,
        level: steps.level,
        objective: steps.objective,
      }),
  });

  async function handleDietShare() {
    try {
      if (data && Object.keys(data)?.length === 0) {
        return;
      }

      const foods = `${data?.refeicoes.map(
        (meal) =>
          `\n- Nome: ${meal.nome}\n- Horário: ${
            meal.horario
          }\n- Alimentos: ${meal.alimentos.map((food) => `${food}`)}\n`
      )}`;

      const supplements = `${data?.suplementos.map(
        (supplement) => `${supplement}`
      )}`;

      const message = `Dieta: ${data?.nome} - Objetivo: ${data?.objetivo}\n\n${foods}\n\n- Dica de suplementos: ${supplements}`;

      await Share.share({
        message: message,
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (isFetching) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Estamos gerando sua dieta!</Text>
        <Text style={styles.loadingText}>Aguarde um momento...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Falha ao gerar sua dieta!</Text>
        <Link href="./index">
          <Text style={styles.loadingText}>Tente novamente</Text>
        </Link>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        title="Minha dieta"
        currentStep={3}
        handleDietShare={handleDietShare}
      />

      <ScrollView style={{ paddingHorizontal: 16, flex: 1 }}>
        {data && !!Object.keys(data)?.length && (
          <>
            <Text style={styles.name}>{data?.nome}</Text>
            <Text style={styles.objective}>{data?.objetivo}</Text>

            <Text style={styles.label}>Refeições:</Text>

            <View style={styles.foods}>
              {data?.refeicoes.map((meal) => (
                <View key={meal.nome} style={styles.food}>
                  <View style={styles.foodHeader}>
                    <Text style={styles.foodName}>{meal.nome}</Text>
                    <Ionicons
                      name="restaurant"
                      color={colors.black}
                      size={16}
                    />
                  </View>

                  <View style={styles.foodContent}>
                    <Feather name="clock" color={colors.black} size={14} />
                    <Text>{meal.horario}</Text>
                  </View>

                  <Text style={styles.foodText}>Alimentos: </Text>
                  {meal.alimentos.map((food) => (
                    <Text key={food}>{food}</Text>
                  ))}
                </View>
              ))}
            </View>

            <View style={styles.supplements}>
              <Text style={styles.foodName}>Dica de suplementos:</Text>
              {data?.suplementos.map((supplement) => (
                <Text key={supplement}>{supplement}</Text>
              ))}
            </View>
          </>
        )}

        <Pressable style={styles.button} onPress={() => router.replace("/")}>
          <Text style={styles.buttonText}>Gerar nova dieta</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
