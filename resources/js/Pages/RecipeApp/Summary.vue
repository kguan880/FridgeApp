<template>
    <app-layout>
        <div class="page-container">
            <div class="page-image">
                <img :src="list.image" alt="" />
            </div>
            <div class="recipe-summary">
                <h1>{{ list.title }}</h1>
                <div
                    v-for="steps in list.analyzedInstructions[0].steps"
                    :key="steps.number"
                >
                    <li>{{ steps.step }}</li>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "./../../Layouts/AppLayout";

export default {
    name: "Summary",
    components: {
        AppLayout
    },
    data() {
        return { list: {} };
    },
    props: ["id"],
    mounted() {
        axios({
            method: "GET",
            url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.id}/information`,
            headers: {
                "content-type": "application/octet-stream",
                "x-rapidapi-host":
                    "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key":
                    "5c39852eaamsh3c0ab5fa50d28aep1611abjsnaf1fa66de821",
                useQueryString: true
            }
        })
            .then(response => {
                console.log(response.data);
                this.list = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>

<style scoped>
.page-container{
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    height: auto;
}

.page-image {
    width: 40%;
    margin: 10px;
}

.page-image img{
    width: 100%;
    height: 100%;
}

.recipe-summary {
    width: 50%;
    background-color: lightblue;
    box-shadow: 5px 5px lightgrey;
    padding: 20px;
    border-radius: 25px;
    margin: 10px;
}
</style>
