import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length == 0) return null;
  return (
    <View className="absolute w-full z-10 bottom-10">
      <TouchableOpacity
        className="bg-[#00ccbb] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
        onPress={() => {
          navigation.navigate("Basket");
        }}
      >
        <Text className="text-white font-extrabold text-lg py-1 px-2 bg-[#01A296]">
          {items.length}
        </Text>
        <Text className="flex-1 font-extrabold text-center text-lg text-white">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} curency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
