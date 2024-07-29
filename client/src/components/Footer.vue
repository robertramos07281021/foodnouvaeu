<template>
  <div
    class="grid divide-orange-100 bg-orange-500 min-[320px]:divide-y-4 min-[320px]:text-center lg:h-52 lg:grid-cols-3 lg:divide-x-4 lg:divide-y-0 lg:text-left 2xl:h-52 2xl:grid-cols-3 2xl:divide-x-4"
  >
    <div
      class="sectorTitle flex flex-col justify-center text-lg font-bold min-[320px]:py-4 lg:py-0 lg:pl-4 2xl:pl-4"
    >
      <p class="pb-3">
        <span>Food</span> <span class="text-white">Nouveau</span>
      </p>
      <ul
        class="flex divide-x-2 divide-black pt-2 text-sm text-white min-[320px]:justify-center lg:justify-start lg:gap-2 2xl:gap-4"
      >
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/recipes">
          <li class="pl-4">Recipe</li>
        </a>
        <a href="/features">
          <li class="pl-4">Features</li>
        </a>
        <a href="/addrecipes">
          <li class="pl-4">Add Recipes</li>
        </a>
      </ul>
      <form
        novalidate
        class="flex w-0 gap-2 pt-4 min-[320px]:w-full min-[320px]:justify-center min-[320px]:px-2 lg:justify-start lg:px-0"
        @submit.prevent="handleEmailSubmit"
      >
        <input
          type="email"
          :class="[
            'rounded',
            'p-1',
            'placeholder:text-orange-200',
            'min-[320px]:w-full',
            'md:w-96',
            'lg:w-56',
            '2xl:w-96',
            'ring-red-500',
            noEmail && 'ring-inset ring-offset-2 invalid:ring-2',
            'shadow-md',
          ]"
          placeholder="Enter email address"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          v-model="newEmail"
          required
        />
        <button
          class="pi pi-envelope rounded bg-orange-300 px-5 py-2 text-xl shadow-md transition duration-200 ease-out hover:scale-110"
        ></button>
      </form>
      <p class="pt-2 text-xs text-white">
        Copyright &copy; {{ new Date().getFullYear() }}
      </p>
    </div>
    <div
      class="flex flex-col gap-5 min-[320px]:justify-center min-[320px]:py-4 lg:py-0 lg:pl-5 2xl:justify-center"
    >
      <div class="flex gap-4 min-[320px]:justify-center lg:justify-start">
        <i
          class="pi pi-map-marker text-orange-300 min-[320px]:pt-2 min-[320px]:text-2xl lg:pt-0 lg:text-3xl 2xl:text-4xl"
        ></i>
        <div
          class="sectorTitle font-medium text-white min-[320px]:text-sm lg:text-base 2xl:text-base"
        >
          <p>664 B. Ramos Ave.</p>
          <p>Brgy Dimagiba San Jose Bulacan</p>
        </div>
      </div>
      <div>
        <div class="flex gap-4 min-[320px]:justify-center lg:justify-start">
          <i
            class="pi pi-phone text-orange-300 min-[320px]:text-2xl lg:text-3xl 2xl:text-4xl"
          ></i>
          <p
            class="sectorTitle flex font-medium text-white min-[320px]:text-sm lg:items-center lg:text-base 2xl:text-base"
          >
            +63 922 222 2222
          </p>
        </div>
      </div>
      <div>
        <div class="flex gap-4 min-[320px]:justify-center lg:justify-start">
          <i
            class="pi pi-at text-orange-300 min-[320px]:text-2xl lg:text-3xl 2xl:text-4xl"
          ></i>
          <p
            class="sectorTitle flex items-center font-medium text-white min-[320px]:text-sm lg:text-base 2xl:text-base"
          >
            support@FoodNouveau.com
          </p>
        </div>
      </div>
    </div>
    <div class="px-4 min-[320px]:py-4 lg:py-0 lg:pt-5">
      <h1
        class="sectorTitle font-semibold text-white min-[320px]:text-lg lg:text-lg"
      >
        About Us
      </h1>
      <p
        class="sectorTitle text-justify indent-8 font-medium text-white min-[320px]:px-10 min-[320px]:text-sm lg:px-4 lg:text-sm 2xl:text-base"
      >
        We are giving you the most delicious foods around the world. The
        achievement of our company is to spread the beauty of culinary and the
        best dishes of diverse countries around the world.
      </p>
      <div class="mt-2 flex justify-center gap-5 text-3xl text-orange-300">
        <i class="pi pi-facebook"></i>
        <i class="pi pi-twitter"></i>
        <i class="pi pi-instagram"></i>
        <i class="pi pi-github"></i>
      </div>
    </div>
  </div>
  <div
    v-if="thangYouMessage"
    class="fixed top-0 z-50 flex h-screen w-full items-center justify-center backdrop-blur-[1px]"
  >
    <div
      class="flex h-52 w-96 flex-col items-center justify-center gap-8 rounded-xl bg-white shadow-md shadow-orange-500 ring-4 ring-inset ring-orange-500 ring-offset-1"
    >
      <div class="text-center">
        <p class="text-4xl font-black text-orange-500">Thank You!</p>
        <p class="text-lg font-semibold text-orange-500">For Subscription</p>
      </div>
      <button
        @click="handleCloseModal"
        class="rounded-full border-2 border-orange-500 bg-orange-500 px-10 py-2 font-bold text-white shadow-md transition duration-200 hover:bg-white hover:text-orange-500"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const newEmail = ref("");
const noEmail = ref(false);
const thangYouMessage = ref(false);

if (thangYouMessage.value) {
  document.body.style.overflow = "hidden";
} else {
  document.body.style.overflow = "visible";
}

const handleCloseModal = () => {
  thangYouMessage.value = false;
};

const handleEmailSubmit = async () => {
  const email = {
    email: newEmail.value,
  };
  if (email.email == "") {
    noEmail.value = !noEmail.value;
  } else {
    try {
      const addEmail = await axios.post("/api/recipes/addemail", email);
      thangYouMessage.value = !thangYouMessage.value;
      newEmail.value = "";
      scrollTo(0, 0);
    } catch (error) {
      console.error("Error: ", error);
    }
  }
};
</script>
