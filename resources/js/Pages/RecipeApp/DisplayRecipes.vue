<template>
    <div>
        <div v-for="recipe in getRecipes" :key="recipe.id">
            <a :href="'/summary/' + recipe.id"><li>{{recipe.title}} - {{recipe.missedIngredientCount}}</li></a>
            <img :src="recipe.image" alt="">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "DisplayRecipes",
    computed: mapState({
        getRecipes: state=> state.recipes
    })
};
</script>

<style scoped></style>
