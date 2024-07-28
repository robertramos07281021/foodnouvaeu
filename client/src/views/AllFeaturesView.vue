<template>
  <div class="left-5" id="allFeatureBackButton">
    <BackButton :to="`/`" />
  </div>
  <div
    class="flex min-h-screen w-full flex-col items-center justify-center bg-orange-100 pt-16"
  >
    <div
      class="homeSection my-10 flex flex-col flex-wrap items-center rounded-xl bg-white text-center"
    >
      <h1 class="sectorTitle py-5">All Features</h1>
      <div class="randomMenuDiv flex flex-wrap justify-center">
        <YourRecipeCard
          v-for="meal in meals.meals"
          :key="meal"
          :meal="meal"
          :forBack="`allfeatures=true`"
        />
      </div>
    </div>
    <UpButton />
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";
import YourRecipeCard from "@/components/YourRecipeCard.vue";
import BackButton from "@/components/BackButton.vue";
import UpButton from "@/components/UpButton.vue";

const meals = reactive({
  meals: [],
});

onMounted(async () => {
  try {
    const res = await axios.get("/api/recipes");
    meals.meals = res.data.recipes;
  } catch (error) {
    console.error("Error: ", error);
  }
});
</script>
