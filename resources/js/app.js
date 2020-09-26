require("./bootstrap");

import Vue from "vue";
import Vuex from "vuex";

import { InertiaApp } from "@inertiajs/inertia-vue";
import { InertiaForm } from "laravel-jetstream";
import PortalVue from "portal-vue";
import axios from "axios";

Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);
Vue.use(Vuex);
Vue.use(axios);

const app = document.getElementById("app");

const store = new Vuex.Store({
    state: {
        ingredients: {
            item1: "",
            item2: "",
            item3: ""
        },
        recipes: []
    },
    getters: {
        ingredients: state => {
            return state.ingredients;
        },
        recipes: state => {
            return state.recipes;
        }
    },
    actions: {
        loadRecipes({ commit, state }) {
            axios({
                method: "GET",
                url:
                    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
                headers: {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host":
                        "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                    "x-rapidapi-key":
                        "5c39852eaamsh3c0ab5fa50d28aep1611abjsnaf1fa66de821",
                    useQueryString: true
                },
                params: {
                    number: "5",
                    ranking: "1",
                    ignorePantry: "false",
                    ingredients: `${state.ingredients.item1}%2C${state.ingredients.item2}%2C${state.ingredients.item3}`
                }
            })
                .then(response => response.data)
                .then(recipes => {
                    console.log(recipes);
                    commit("SET_RECIPES", recipes);
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
    mutations: {
        SET_ITEM1(state, item1) {
            state.ingredients.item1 = item1;
        },
        SET_ITEM2(state, item2) {
            state.ingredients.item2 = item2;
        },
        SET_ITEM3(state, item3) {
            state.ingredients.item3 = item3;
        },
        SET_RECIPES(state, recipes) {
            state.recipes = recipes;
        }
    }
});

new Vue({
    store,
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name => require(`./Pages/${name}`).default
            }
        })
}).$mount(app);
