<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ product.name_of_item }}</h5>
                <p class="card-text">
                    {{ product.price_of_item }}
                </p>
                <button class="btn btn-primary" v-on:click="addToCart()">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    computed:{

    },
    methods: {
        addToCart() {
            const item = {
                name: this.product.name_of_item,
                price: this.product.price_of_item,
                id: this.product.id,
            };
            console.log(item);
            this.$store.commit("set_carts", item);
        },
    },
};
</script>
