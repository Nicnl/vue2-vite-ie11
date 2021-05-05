<template>
    <div>
        <button @click="nb++">BUTTON PRESS #{{ nb }}</button>
    </div>
</template>

<script>
export default {
    name: 'ButtonCounter',
    data() {
        return {
            nb: 0,
        };
    },
}
</script>