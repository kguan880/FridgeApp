<template>
    <app-layout>
        <template #header>
            <div>
                <h1>Search for a recipe!</h1>
            </div>
        </template>
        <search-form/>
    </app-layout>
</template>

<script>
import AppLayout from "./../../Layouts/AppLayout";
import SearchForm from "./SearchForm"

export default {
    name: "FridgeApp",
    components: {
        AppLayout,
        SearchForm
    }
};
</script>

<style scoped></style>
