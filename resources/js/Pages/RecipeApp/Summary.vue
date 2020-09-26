<template>
    <div>
        <h1>{{list.title}}</h1>
        <img :src="list.image" alt="">
        <div v-for="steps in list.analyzedInstructions[0].steps" :key="steps.number">
            <li>{{steps.step}}</li>
        </div>
    </div>
</template>

<script>
export default {
    name: "Summary",
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

<style scoped></style>
