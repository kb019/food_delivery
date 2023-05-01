import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";
import "react-native-url-polyfill/auto";

const HomeScreen = () => {
  const [featuredCatogeries, setFeaturedCategories] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="featured"]{
      ...,
      restaurants[]->{
        ...,
       dishes[]->{

       } 
      }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  
  return (
    <SafeAreaView className="bg-white pt-5 ">
      {/* {Header} */}
      <View className="flex-row pb-3 items-center space-x-2 mx-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 p-4 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3 items-center">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Reataurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Scrollable */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Componenets */}
        <Categories />
        {/* /********FeaturedRows******* */}
        {featuredCatogeries?.map((category) => {
          return (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          );
        })}
        {/* <FeaturedRow
          id="testing"
          title="Featured"
          description="Paid Placements from our partners"
        />
        <FeaturedRow
          id="testing"
          title="Tasty Discounts"
          description="Everyones being enjoying this juicy discount!"
        />
        <FeaturedRow
          id="testing"
          title="Offers near you!"
          description="Why not support your local restaurant tonight"
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
