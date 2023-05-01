import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import client, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    client.fetch(`*[_type=="category"]`).then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* {CategoryCard} */}
      {categories.map((category) => {
        return (
          <CategoryCard
            key={category._id}
            imgUrl={urlFor(category.image).url()}  /*urlFor(category.image).width(200).url()*/
            title={category.name}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
