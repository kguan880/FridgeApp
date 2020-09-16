<template>
    <div>
        Enter your ingredients here:
        <form action="">
            <input v-model="item1" />
            <input v-model="item2" />
            <input v-model="item3" />
        <button v-on:click='loadRecipes'>Submit</button>
        </form>
    </div>
</template>

<script>
import { mapFields } from "../../helper.js";
import { mapActions, mapState } from "vuex"

export default {
    name: "SearchForm",
    methods: {
        ...mapActions([
            'loadRecipes'
        ])
    },
    computed: {
        item1: {
            get () {
                return this.$store.state.ingredients.item1
            },
            set(value) {
                this.$store.commit('SET_ITEM1', value)
            }
        },
         item2: {
            get () {
                return this.$store.state.ingredients.item2
            },
            set(value) {
                this.$store.commit('SET_ITEM2', value)
            }
        },
         item3: {
            get () {
                return this.$store.state.ingredients.item3
            },
            set(value) {
                this.$store.commit('SET_ITEM3', value)
            }
        }
    }
};
</script>

<style scoped></style>
