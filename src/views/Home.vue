<template>
    <div class="home">
        Hello, this is Home.vue.<br/>
        Here is a button that counts:<br/>
        <ButtonCounter/>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
        ButtonCounter: () => import('./ButtonCounter.vue'),
    },
}
</script>
