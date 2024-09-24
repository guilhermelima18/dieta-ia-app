import { ScrollView, View, Text, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStepsStore } from "@/src/store/step-data";
import { Header } from "@/src/components/header";
import { Select } from "@/src/components/select";
import { styles } from "@/src/styles/step-two";
import { stepTwoSchema, StepTwoSchemaType } from "@/src/validations/step-two";
import { router } from "expo-router";

const genderOptions = [
  {
    label: "Masculino",
    value: "Masculino",
  },
  {
    label: "Feminino",
    value: "Feminino",
  },
];

const levelOptions = [
  {
    label: "Sedentário (pouco ou nenhuma atividade física)",
    value: "Sedentário (pouco ou nenhuma atividade física)",
  },
  {
    label: "Levemente ativo (exercícios 1 a 3 vezes na semana)",
    value: "Levemente ativo (exercícios 1 a 3 vezes na semana)",
  },
  {
    label: "Moderadamente ativo (exercícios 3 a 5 vezes na semana)",
    value: "Moderadamente ativo (exercícios 3 a 5 vezes na semana)",
  },
  {
    label: "Altamente ativo (exercícios 5 a 7 dias na semana)",
    value: "Altamente ativo (exercícios 5 a 7 dias na semana)",
  },
];

const objectiveOptions = [
  {
    label: "Emagrecer",
    value: "Emagrecer",
  },
  {
    label: "Hipertrofia",
    value: "Hipertrofia",
  },
  {
    label: "Hipertrofia + Definição",
    value: "Hipertrofia + Definição",
  },
  {
    label: "Definição",
    value: "Definição",
  },
];

export default function StepTwo() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StepTwoSchemaType>({
    resolver: zodResolver(stepTwoSchema),
  });

  const { setStepTwo } = useStepsStore();

  function handleFinishedStep(data: StepTwoSchemaType) {
    setStepTwo(data);
    router.push("/nutrition");
  }

  return (
    <View style={styles.container}>
      <Header title="Finalizando dieta" currentStep={2} />

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Sexo:</Text>
        <Select
          name="gender"
          control={control}
          options={genderOptions}
          placeholder="Selecione o sexo..."
          error={errors?.gender?.message}
        />

        <Text style={styles.label}>Nível:</Text>
        <Select
          name="level"
          control={control}
          options={levelOptions}
          placeholder="Selecione o nível..."
          error={errors?.level?.message}
        />

        <Text style={styles.label}>Objetivo:</Text>
        <Select
          name="objective"
          control={control}
          options={objectiveOptions}
          placeholder="Selecione o seu objetivo..."
          error={errors?.objective?.message}
        />

        <Pressable
          style={styles.button}
          onPress={handleSubmit(handleFinishedStep)}
        >
          <Text style={styles.buttonText}>Finalizar Dieta</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
