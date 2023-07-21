<script>
import Banner from './components/banner.vue';
import Posts from './components/posts.vue';
import Footer from './components/footer.vue';
import allarticles from "./assets/posts.json";

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
                this.langText = "日本語";
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
        <div id="langSelect">
            <p>
            Language/言語選択:
            <button @click="toggleLang()">{{ langText}}</button>
            </p>
        </div>
        <Banner :language="lang"/>
        <div id="postarea">
            <Posts v-for="article in articles" v-bind:key="article.id" :article="article" :language="lang"></Posts>
        </div>
        <Footer />
    </div>
</template>

<style >
#postarea {
    width: 55%;
    border-radius: 20px;
    height: max-content;
    min-height: 125px;
    background: grey;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(150px, auto);
    justify-items: center;
}

@media screen and (max-width: 750px) {
    #postarea {
        width: 90%;
    }
}

#langSelect {
    height: 5vh;
    display: flex;
    justify-content: right;
}

#langSelect p {
    font-weight: bold;
}

#langSelect button {
    background-color: yellow;
    border: 2px solid gray;
    height: 2rem;
    width: 5em;
}
</style>
