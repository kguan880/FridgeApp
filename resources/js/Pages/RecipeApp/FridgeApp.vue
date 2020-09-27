<template>
    <app-layout>
        <div class="app-container">
        <Header/>
        <search-form/>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "./../../Layouts/AppLayout";
import SearchForm from "./SearchForm"
import Header from './Header'

export default {
    name: "FridgeApp",
    components: {
        AppLayout,
        SearchForm,
        Header
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

* {
    font-family: 'Open-Sans', sans-serif;
}

.app-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
