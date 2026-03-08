<script setup>
import AOS from 'aos'
import {nextTick, onMounted} from "vue";
import Advogados from "@/dados/advogados.json";
onMounted(async () => {
  try {
    await nextTick()
    AOS.refresh()
  } catch (error) {
    console.error('Erro ao carregar o noticias ', error)
  }
})
</script>

<template>
  <section class="team-wrapper team-1 section-padding">
    <div class="shape-1">
      <img src="@assets/img/shape/shape-15.png" alt="">
    </div>
    <div class="container">
      <div class="section-title text-center">
        <div class="sub-title"><span>Equipe</span>
        </div>
        <h2 class="split-text left" style="perspective: 400px;">
          <div class="split-line" style="display: block; text-align: center; position: relative;">
          <div style="position:relative;display:inline-block;">
            Nossos Advogados
         </div>
          </div>
        </h2>
      </div>
      <p class="text-center">Nosso time de advogados é composto por profissionais altamente qualificados e especializados em diversas áreas do Direito.</p>
      <div class="row">
        <template v-for="(item,index) in Advogados" :key="index">
        <div class="col-xl-3 col-lg-4 col-md-6" >
          <div class="single-team-item">
            <div class="shape">
              <img class="shape-2" src="@assets/img/team/shape-1.png" alt="">
              <img class="shape-3" src="@assets/img/team/shape-2.png" alt="">
            </div>
            <div class="team-image">
              <div class="image">
<!--                <img :src="`@assets/${item.foto}`" alt="team-img">-->
                <img :src="`src/${item.foto}`" alt="team-img">
              </div>
              <div class="social-icon">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-pinterest-p"></i></a>
              </div>
            </div>
            <div class="content text-center pt-3">
              <p>
                {{item.area_atuacao}}
              </p>
              <h3>
                <a href="teams-details.html">
                 {{item.nome}}
                </a>
              </h3>
            </div>
          </div>
        </div>
        </template>
      </div>
    </div>
  </section>
</template>


