<script>
    export default {
        props: {language : Number}
    };    
</script>

<template>
    <div class="banner">
        <h1>{{ language ? "日本渡来記" : "Japan Visitation Record" }}</h1>
        <p>{{ language ? "五年ぶりの日本への帰国の日記です。" : "The Diary I put on the first visit to Japan for 5 years." }}</p>
    </div>
</template>

<style>
    .banner {
        height: 75vh;
    }

    .banner h1 {
        padding-top: 45vh;
        font-size: 32pt;
        font-weight: bolder;
    }

    .banner p {
        font-size: larger;
        font-weight: bold;
    }
</style>
