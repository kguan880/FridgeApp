<template>
    <div class="recipe-grid-display">
        <div v-for="recipe in getRecipes" :key="recipe.id" class="recipe-item" v-bind:class= "recipe.missedIngredientCount == 0 ? 'grid-colour-green':'grid-colour-red'">     
            <a :href="/summary/ + recipe.id"><div>
            <h2>{{recipe.title}}</h2>
            <img :src="recipe.image" >
            <div v-if="recipe.missedIngredientCount == 0">
                <p> You have all the ingredients required to make this recipe! <br> Click here to see how</p>
            </div>
            <div v-else-if="recipe.missedIngredientCount !== 0">
                <p> Here are the ingredients that you are missing for this recipe: <br></p>
                <ul v-for="ingredient in recipe.missedIngredients" :key="ingredient.id">
                    <li>{{ingredient.name}}</li>
                </ul>
            </div>
        </div></a>
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

<style scoped>
.recipe-grid-display{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    position: relative;
}

.recipe-item{
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 500px;
    border-radius: 25px;
    text-align: center;
    align-items: center;
    clip-path: inset(0 0 85% 0);
    transition: clip-path 1s;
    margin: 4px;
    flex: 0 1 20%;
}

.recipe-item h2{
    padding-top: 25px;
    padding-bottom: 50px;
}

.recipe-item:hover {
       box-shadow: inset 0 0 80px 80px rgba(255, 255, 255, 0.2);
       clip-path: inset(0 0 0 0);
}

.grid-colour-red{
    background-color: lightcoral;
}

.grid-colour-green{
    background-color: lightgreen;
}
</style>
