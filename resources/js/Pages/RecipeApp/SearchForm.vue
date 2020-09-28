<template>
    <div>
        <div class="form-container">
            <form class="form">
                Enter your ingredients here:
                <input v-model="item1" />
                <input v-model="item2" />
                <input v-model="item3" />
            </form>
            <button class="button" v-on:click="loadRecipes">Go</button>
        </div>
        <div v-if="this.$store.state.recipes.length > 1">
            <display-recipes />
        </div>
    </div>
</template>

<script>
import { mapFields } from "../../helper.js";
import { mapActions, mapState } from "vuex";
import DisplayRecipes from "./DisplayRecipes";

export default {
    name: "SearchForm",
    components: {
        DisplayRecipes
    },
    methods: {
        ...mapActions(["loadRecipes"])
    },
    computed: {
        item1: {
            get() {
                return this.$store.state.ingredients.item1;
            },
            set(value) {
                this.$store.commit("SET_ITEM1", value);
            }
        },
        item2: {
            get() {
                return this.$store.state.ingredients.item2;
            },
            set(value) {
                this.$store.commit("SET_ITEM2", value);
            }
        },
        item3: {
            get() {
                return this.$store.state.ingredients.item3;
            },
            set(value) {
                this.$store.commit("SET_ITEM3", value);
            }
        }
    }
};
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    width: 35vw;
    background-color:lightblue;
    border-radius: 25px;
    box-shadow: 5px 5px lightgrey;
}
.form {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    width: 100%;
    padding: 20px;
}

.form input {
    margin: 5px;
}

.button {
    font-size: 2rem;
}
</style>
