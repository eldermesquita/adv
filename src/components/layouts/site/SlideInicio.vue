<script setup>
import AOS from 'aos'
import {nextTick, onMounted} from "vue";
onMounted(async () => {
  try {
    await nextTick()
    AOS.refresh()
  } catch (error) {
    console.error('Erro ao carregar o rodapé ', error)
  }
})
</script>

<template>
  <!-- Hero Section Start -->
  <section class="hero-wrapper hero-1 mx-xl-5">
    <div class="shape">
      <img class="shape-1" src="@assets/img/world.png" alt="">
    </div>
    <div class="hero-bg bg-cover1">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-12 col-12">
          <div class="hero-content pe-xl-3 text-lg-start text-center tp-play-up"
               data-aos="slide-right"
               data-aos-delay="300"
               data-aos-duration="800">
            <h1>
              ESCRITÓRIO DE ADVOCACIA
            </h1>
            <p >Sociedade Unipessoal de Advocacia - OAB/RR 127
              Você está enfrentando
              problemas criminais?
              Atendimento especializado de forma Presencial em
              todo Estado de Roraima e Online em todo brasil
            </p>
            <div class="hero-button mt-4">
              <a href="causes.html" class="theme-btn">Falar com advogado</a>
            </div>
            <div class="feedback d-flex mt-xl-5">
              <div class="infu">
                <img src="@assets/img/google.png" alt="">
                <p><span>4.8</span> avaliações no Google.</p>
              </div>
              <div class="infu">
                <img src="@assets/img/rating.png" alt="">
                <p><span>4.9</span> avaliações no Google.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-12  "
             data-aos="slide-left"
             data-aos-delay="300"
             data-aos-duration="800">
          <div class="hero-image">
            <img src="@assets/img/hero/hero-1.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style>
.bg-cover1 {
  background-image: url('@assets/img/hero/hero-1-1-bg.png');
}
</style>
