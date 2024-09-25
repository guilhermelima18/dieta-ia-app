import { Pressable, SafeAreaView, Text, View } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/src/theme/colors";

type HeaderProps = {
  title: string;
  currentStep: number;
  handleDietShare?: () => void;
};

export function Header({ title, currentStep, handleDietShare }: HeaderProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {currentStep !== 3 && (
          <View style={styles.row}>
            <Pressable onPress={() => router.back()}>
              <Feather name="arrow-left" size={24} color={colors.black} />
            </Pressable>

            <Text style={styles.text}>
              Passo {currentStep}
              <Feather name="loader" size={16} color={colors.black} />
            </Text>
          </View>
        )}

        <View style={styles.contentTitle}>
          <Text style={styles.title}>{title}</Text>

          {currentStep === 3 && (
            <Pressable style={styles.button} onPress={handleDietShare}>
              <Feather name="share-2" size={20} color={colors.white} />
              <Text style={styles.buttonText}>Compartilhar</Text>
            </Pressable>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
