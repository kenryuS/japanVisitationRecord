<script>
import Banner from './components/banner.vue';
import Posts from './components/posts.vue';
import Footer from './components/footer.vue';
import allarticles from "../public/posts.json";
console.log(allarticles);
export default {
    data() {
        return {
            articles: allarticles["articles"],
            lang: 0,
            langText: "English"
        }
    },
    components: {
        Banner,
        Posts,
        Footer,
    },
    methods: {
        toggleLang() {
            if (this.lang == 0) {
                this.lang = 1;
                this.langText = "Japanese";
            } else if (this.lang == 1) {
                this.lang = 0;
                this.langText = "English";
            }
        }
    }
}
</script>

<template>
    <title>{{ lang ? "日本渡来記" : "Japan Visitation Record" }}</title>
    <div>
        <Banner :language="lang"/>
        <div id="postarea">
            <Posts v-for="article in articles" v-bind:key="article.id" :article="article" :language="lang"></Posts>
        </div>
        <button @click="toggleLang()">{{ langText }}</button>
        <Footer />
    </div>
</template>

<style >
#postarea {
    width: 60%;
    border-radius: 20px;
    height: fit-content;
    max-height: 400px;
    min-height: 125px;
    background: grey;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
