import { View, ScrollView, Text, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/src/components/header";
import { styles } from "@/src/styles/step-one";
import { Input } from "@/src/components/input";
import { stepSchema, StepSchemaType } from "@/src/validations/step";

export default function StepOne() {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<StepSchemaType>({
    resolver: zodResolver(stepSchema),
  });

  return (
    <View style={styles.container}>
      <Header title="Vamos começar" currentStep={1} />

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Nome:</Text>
        <Input
          name="nome"
          control={control}
          keyboardType="default"
          placeholder="Digite seu nome..."
          error={errors?.name?.message}
        />

        <Text style={styles.label}>Seu peso atual:</Text>
        <Input
          name="weight"
          control={control}
          keyboardType="numeric"
          placeholder="Ex: 90"
          error={errors?.weight?.message}
        />

        <Text style={styles.label}>Sua altura atual:</Text>
        <Input
          name="height"
          control={control}
          keyboardType="numeric"
          placeholder="Ex: 1.85"
          error={errors?.height?.message}
        />

        <Text style={styles.label}>Sua idade atual:</Text>
        <Input
          name="age"
          control={control}
          keyboardType="numeric"
          placeholder="Ex: 28"
          error={errors?.age?.message}
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
