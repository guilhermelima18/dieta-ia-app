import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";

type OptionsProps = {
  label: string;
  value: string | number;
};

type SelectProps = {
  name: string;
  control: any;
  placeholder?: string;
  error?: string;
  options: OptionsProps[];
};

export function Select({
  name,
  control,
  placeholder,
  error,
  options,
}: SelectProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => (
          <>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => setModalIsOpen(!modalIsOpen)}
            >
              <Text>
                {value
                  ? options.find((option) => option.value === value)?.label
                  : placeholder}
              </Text>
              <Feather name="arrow-down" size={16} color="#000" />
            </TouchableOpacity>

            <Modal
              visible={modalIsOpen}
              animationType="fade"
              transparent={true}
              onRequestClose={() => {}}
            >
              <TouchableOpacity
                style={styles.modalContainer}
                activeOpacity={1}
                onPress={() => setModalIsOpen(false)}
              >
                <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
                  <FlatList
                    contentContainerStyle={{ gap: 4 }}
                    data={options}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                          onChange(item.value);
                          setModalIsOpen(false);
                        }}
                      >
                        <Text>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </Modal>
          </>
        )}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
