import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { colors } from "../theme/colors";
import { styles } from "../styles/home";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />

      <Text style={styles.title}>
        Dieta
        <Text style={{ color: colors.white }}>.AI</Text>
      </Text>

      <Text style={styles.text}>
        Sua dieta personalizada com inteligência artificial
      </Text>

      <Link href="/step-one" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Gerar dieta</Text>
        </Pressable>
      </Link>
    </View>
  );
}
