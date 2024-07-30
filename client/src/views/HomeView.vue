<script setup>
import LogoPicture from "@/assets/logo-spoon.png";
import SampleRecipe from "@/components/sections/home/SampleRecipe.vue";
import Category from "@/components/sections/home/Category.vue";
import Features from "@/components/sections/home/Features.vue";
import UpButton from "@/components/UpButton.vue";
import ThankYouMessage from "@/components/sections/home/ThankYouMessage.vue";
import EmailError from "@/components/sections/home/EmailError.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const thankYouQuery = route.query.thankyou;
const error = route.query.error;

const thankYouMessage = ref(false);
const errorExist = ref(false);

const handleCloseError = () => {
  errorExist.value = false;
  router.push("/");
};

onMounted(() => {
  if (thankYouQuery) {
    thankYouMessage.value = !thankYouMessage.value;
  }
  if (error) {
    errorExist.value = !errorExist.value;
  }
});
</script>

<template>
  <main class="flex flex-col items-center bg-orange-100 pt-16" id="Main">
    <section class="mt-10 flex flex-col text-center">
      <div class="flex flex-row items-center">
        <img :src="LogoPicture" alt="MyPicture" class="logoImage" />
        <p class="homeWelcome pt-5">
          Welcome to <span class="welcomeMessage font-black">Food</span>
          <span class="welcomeMessage text-orange-500">Nouveau</span>
        </p>
        <img :src="LogoPicture" alt="MyPicture" class="logoImage" />
      </div>
      <p class="homeDescription font-semibold">
        We serve you a lot of Recipe here at our website.
      </p>
      <p class="homeDescription font-semibold">
        We preferred also a lot of recipes around the world.
      </p>
    </section>

    <hr class="my-10 border-2 border-black" />

    <section
      class="homeSection mb-10 flex flex-col items-center rounded-xl bg-white shadow-xl"
    >
      <h1 class="sectorTitle text-center">Sample Recipe</h1>
      <SampleRecipe />

      <hr class="my-10 border-2 border-black" />

      <h1 class="sectorTitle text-center">Featured Recipes</h1>
      <Features :limit="4" />

      <hr class="my-10 border-2 border-black" />

      <h1 class="sectorTitle text-center">Categories</h1>
      <Category />
    </section>

    <UpButton />
  </main>
  <ThankYouMessage v-if="thankYouMessage" />
  <!-- <div
    class="bg-whtie fixed left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur-[1px]"
  >
    <div class="flex h-96 w-4/12 flex-col rounded-xl shadow-2xl">
      <div
        class="flex h-36 items-center justify-center rounded-t-xl border-b-4 border-black/20 bg-orange-500"
      >
        <div
          class="flex items-center gap-2 rounded-full bg-orange-200 px-4 py-1"
        >
          <img :src="LogoPicture" alt="logopic" class="w-16" />
          <p class="welcomeMessage text-3xl font-black">
            <span>Food</span> <span class="text-white">Nouveau</span>
          </p>
          <img :src="LogoPicture" alt="logopic" class="w-16" />
        </div>
      </div>
      <div class="h-full rounded-b-xl bg-white"></div>
    </div>
  </div> -->
  <EmailError v-if="errorExist" :close="handleCloseError" />
</template>
