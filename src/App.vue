<template>
    <div id="app">
        Hello, this is App.vue.<br/>
        You should see: "this is home page" and a button that counts when clicked.<br/><br/><br/>
        [BEFORE ROUTER-VIEW]<br/>
        __________________________________<br/>
        <br/><br/><router-view/><br/><br/>
        __________________________________<br/>
        [AFTER ROUTER-VIEW]<br/>
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
