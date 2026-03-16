<script setup>
import {nextTick, onMounted, ref} from "vue";
import AOS from 'aos'
import {feedNoticias} from "@/services/noticiasService.js"

const noticias = ref([])

onMounted(async () => {
  try {
    await nextTick()
    AOS.refresh()
    noticias.value = await feedNoticias()
    console.log("🚀 ~  ~   noticias.value : ", noticias.value);
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
          <template v-for="(item,index) in noticias" :key="index">
            <div class="col-xl-4 col-lg-6 col-md-12">
              <div class="single-blog-item">
                <div class="image">
                  <img :src="item.image" :alt="item.title" width="374px" height="282px">
                  <img :src="item.image" :alt="item.title" width="374px" height="282px">
                </div>
                <div class="content">
                  <ul>
                    <li>
                      TRT7
                    </li>
                    <li><i class="fas fa-circle"></i></li>
                    <li>
                      {{ item.date }}
                    </li>
                  </ul>
                  <h3>
                    <a :href="item.link" target="_blank"> {{ item.title }}</a>
                  </h3>
                  <p>
                    {{ item.description }}
                  </p>
                  <a :href="item.link" target="_blank" class="link-btn">
                    Saiba mais <i class="far fa-long-arrow-right"></i>
                  </a>
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
