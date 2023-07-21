<script>
export default {
    template: "#postcards",
    props: {article: Object, language: Number},
}
</script>

<template id="postcards">
    <div id="post">
        <div class="spacer"></div>
        <img v-if="article['image'] != undefined" :src="'/src/assets/img/' + article.image" />
        <h3>{{ language ? article["title-ja"] : article["title-en"] }}</h3>
        <small>{{ language ? "投稿日時：" + article.datetime : "Posted: " + article.datetime }}</small>
        <p>{{ language ? article["content-ja"] : article["content-en"] }}</p>
        <div class="spacer"></div>
    </div>
</template>

<style>
#post {
    color: black;
    background: white;
    border-radius: 20px;
    width: 80%;
    margin-top: 15px;
    margin-bottom: 15px;
}

#post img {
    width: 90%;
}

.spacer {
    height: 10px;
}
</style>
