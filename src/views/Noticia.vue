<script setup>
import {computed} from 'vue'
import LinkLadoDireito from '@components/Layouts/Site/NoticiaLadoDireito.vue'
import noticias from '@/dados/noticias.json'
import {formatarDataPtBr} from "@/utils/funcoes.js";

defineOptions({
  name: 'NoticiasDetalhes',
})
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  }
})

const noticia = computed(() => {
  return noticias.find(n => n.id === props.id)
})
</script>

<template>
  <section class="blog-wrapper section-padding" v-if="noticia">
    <div class="container">
      <div class="news-area">
        <div class="row">
          <div class="col-12 col-xxl-8 col-xl-7">
            <div class="blog-post-details border-wrap mt-0">
              <div class="blog-details-image  fadeInUp">

                <img :src="noticia.imagem" :alt="noticia.titulo">
              </div>
              <div class="single-blog-post post-details mt-0  fadeInUp">
                <div class="post-content pt-0">
                  <div class="post-meta mt-3">
                    <span>
                      <i class="fal fa-calendar-alt"></i>{{formatarDataPtBr(noticia.data) }}
                    </span>
                    |
                    <span>{{ noticia.area_atuacao }}</span>
                  </div>
                  <h3 class="mt-0">{{ noticia.titulo }}</h3>
                  <p>
                    {{ noticia.conteudo }}
                  </p>

                </div>
              </div>
              <div class="row tag-share-wrap  fadeInUp">
                <div class="col-lg-8 col-12">
                  <div class="tagcloud d-flex ">
                    <h4>Tag:</h4>
                    <a href="#">{{ noticia.area_atuacao }}</a>
                  </div>
                </div>
                <div class="col-lg-4 col-12 mt-3 mt-lg-0">
                  <div class="social-share d-flex align-items-center">
                    <h4>Share:</h4>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              </div>
          </div>
          <LinkLadoDireito/>
        </div>
      </div>
    </div>
  </section>
  <section class="section-padding" v-else>
    <div class="container text-center">
      <h3>Notícia não encontrada</h3>
    </div>
  </section>

</template>
<style>
.thumb-noticia {
  background-image: url('@assets/img/news/post-4.jpg');
}
</style>
