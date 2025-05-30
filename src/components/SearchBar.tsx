import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import icons from "../constants/icons";

type SearchBarProps = {
  placeholder?: string;
  onChangeText: (text: string) => void;
  value: string;
};

const SearchBar = ({
  placeholder = "Search your location",
  onChangeText,
  value,
}: SearchBarProps) => {
  return (
    <View className="flex-row items-center bg-zinc-900 rounded-lg mb-5 px-4">
      {value.length > 0 ? (
        <TouchableOpacity onPress={() => onChangeText("")}>
          <Image
            source={icons.close}
            className="w-8 h-8 mx-2"
            tintColor="#6b7280"
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <Image
          source={icons.search}
          className="w-8 h-8 mx-2"
          tintColor="#6b7280"
          resizeMode="contain"
        />
      )}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#6b7280"
        className="flex-1 text-white text-xl py-4"
      />
    </View>
  );
};

export default SearchBar;
