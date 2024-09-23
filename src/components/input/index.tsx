import { TextInput, View, KeyboardTypeOptions, Text } from "react-native";
import { Controller } from "react-hook-form";
import { styles } from "./styles";

type InputProps = {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  keyboardType: KeyboardTypeOptions;
};

export function Input({
  name,
  control,
  placeholder,
  keyboardType,
  error,
  rules,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            keyboardType={keyboardType}
            style={styles.input}
          />
        )}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
