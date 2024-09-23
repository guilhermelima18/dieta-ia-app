import { Pressable, SafeAreaView, Text, View } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/src/theme/colors";

type HeaderProps = {
  title: string;
  currentStep: number;
};

export function Header({ title, currentStep }: HeaderProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Pressable onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color={colors.black} />
          </Pressable>

          <Text style={styles.text}>
            Passo {currentStep}
            <Feather name="loader" size={16} color={colors.black} />
          </Text>
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
