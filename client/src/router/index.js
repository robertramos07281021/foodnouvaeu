import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RecipesView from "@/views/RecipesView.vue";
import FeaturesView from "@/views/FeaturesView.vue";
import AddRecipesView from "@/views/AddRecipesView.vue";
import CategoryView from "@/views/CategoryView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import MealView from "@/views/MealView.vue";
import YourRecipesView from "@/views/YourRecipesView.vue";
import AllFeaturesView from "@/views/AllFeaturesView.vue";
import UpdateYourRecipes from "@/views/UpdateYourRecipes.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: RecipesView,
    },
    {
      path: "/features",
      name: "features",
      component: FeaturesView,
    },
    {
      path: "/addrecipes",
      name: "addrecipes",
      component: AddRecipesView,
    },
    {
      path: "/category",
      name: "category",
      component: CategoryView,
    },
    {
      path: "/meal",
      name: "meal",
      component: MealView,
    },
    {
      path: "/yourrecipe/:id",
      name: "yourrecipe",
      component: YourRecipesView,
    },
    {
      path: "/allfeatures",
      name: "allfeatures",
      component: AllFeaturesView,
    },
    {
      path: "/updaterecipe/:id",
      name: "updaterecipe",
      component: UpdateYourRecipes,
    },

    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
