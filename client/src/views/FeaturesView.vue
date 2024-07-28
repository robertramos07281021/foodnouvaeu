<script setup>
import Favorites from "@/components/sections/features/Favorites.vue";
import YourRecipes from "@/components/sections/features/YourRecipes.vue";
import UpButton from "@/components/UpButton.vue";
</script>

<template>
  <main class="flex min-h-screen justify-center bg-orange-100 pt-16">
    <div
      class="diveSize sectionSize my-10 mb-10 flex flex-col gap-2 rounded-xl"
    >
      <Favorites />
      <YourRecipes />
    </div>
    <UpButton />
  </main>
</template>
