<template>
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Cart Item</a>
        </div>
    </nav>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <Card
                    v-for="item in items"
                    :key="item.id"
                    :product="item"
                ></Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./Card.vue";
export default {
    components: {
        Card,
    },
    computed: {
        items() {
            return this.$store.getters.items;
        },
    },
    mounted() {
        console.log("Component mounted.");
    },
    created() {
        this.$store.dispatch("get_items");
    },
};
</script>
