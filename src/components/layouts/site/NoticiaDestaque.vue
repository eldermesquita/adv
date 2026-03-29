<script setup>
import {nextTick, onMounted, ref} from "vue";
import AOS from 'aos'
import noticias from '@/dados/noticias.json'
import {slugUrl, formatarDataPtBr, textoComReticencias} from "@/utils/funcoes.js";

const noticiasRandomicas = ref([]);

function embaralharNoticias(lista) {
  return [...lista].sort(() => Math.random() - 0.5).slice(0, 3);
}

onMounted(async () => {
  try {
    await nextTick()
    noticiasRandomicas.value = embaralharNoticias(noticias);

    AOS.refresh()

  } catch (error) {
    console.error('Erro ao carregar o noticias ', error)
  }
})
</script>

<template>
  <section class="blog-wrapper blog-1 section-padding section-bg">
    <div class="shape">
      <img class="shape-1" src="@assets/img/shape/shape-5-black.png" alt="">
      <img class="shape-2" src="@assets/img/shape/shape-1.png" alt="">
    </div>
    <div class="container">
      <div class="section-title text-center">
        <div class="sub-title"><span>Artigos</span>
        </div>
        <h2>Artigos mais recentes
        </h2>
      </div>

      <div class="blog-inner">
        <div class="row">
          <template v-for="(item,index) in noticiasRandomicas" :key="index">
            <div class="col-xl-4 col-lg-6 col-md-12">
              <div class="single-blog-item">
                <div class="image" style="background-color: #f4f4f4">

                  <img :src="item.imagem" :alt="item.titulo" width="374px" height="282px">
                  <img src="@assets/img/imagem-padrao.png" :alt="item.titulo" width="374px" height="282px">
                </div>
                <div class="content">
                  <ul>
                    <li>{{ item.area_atuacao }}</li>
                    <li><i class="fas fa-circle"></i></li>
                    <li>
                      {{ formatarDataPtBr(item.data) }}
                    </li>
                  </ul>
                  <h3>
                    <router-link :title="item.titulo"
                                 :to="`/noticia/${item.id}/${slugUrl(item.titulo)}`">
                      {{ item.titulo }}
                    </router-link>
                  </h3>
                  <p>
                    {{ textoComReticencias(item.conteudo, 150) }}
                  </p>
                  <router-link class="link-btn" :title="item.titulo"
                               :to="`/noticia/${item.id}/${slugUrl(item.titulo)}`">
                    Saiba mais <i class="far fa-long-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>

          </template>

        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bg-cover {
  background-image: url('@assets/img/hero/hero-1-1-bg.png');
}
</style>
