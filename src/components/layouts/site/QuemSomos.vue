<script setup>
import {slugUrl} from "@/utils/funcoes.js";

defineOptions({
  name: 'QuemSomos',
})

import {useContato} from '@/composable/useContato'

const {getWhatsappLink} = useContato()
</script>

<template>
  <section class="about-wrapper about-1 section-padding">
    <div class="container">
      <div class="row g-5">
        <div class="col-xl-7 col-lg-12 col-md-12 col-12 wow fadeInLeft" data-wow-delay="300ms">
          <div class="about-images">
            <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" class="icon video-popup"><i
              class="fas fa-play"></i></a>
            <div class="image-1">
              <img src="@assets/img/about/04.jpg" alt="img">
            </div>
            <div class="image-2">
              <img src="@assets/img/about/01.png" alt="img">
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-12 col-md-12 col-12 wow fadeInRight" data-wow-delay="300ms">
          <div class="about-content mt-4 ms-xxl-4">
            <div class="section-title">
              <div class="sub-title"><span>Sobre nós</span></div>
              <h2 class="split-text right">Conheça o <br>Escritório Victor Carvalho Advogados
              </h2>
            </div>
            <p>No Victor Carvalho Advogados, oferecemos atendimento jurídico personalizado, ágil e eficiente, <strong>sempre priorizando o bem-estar de nossos clientes.</strong>
            </p>
            <p>Com mais de 10 anos de experiência, somos referência em diversas áreas do direito. <strong>Atuamos em áreas como Civil, Criminal, Família, Trabalho e
              Previdência.</strong></p>
            <p>Se busca excelência jurídica aliada a um serviço próximo e confiável, o Victor Carvalho Advogados é a escolha certa.</p>
            <p><strong>Fale conosco pelo WhatsApp, telefone ou e-mail.</strong></p>

            <div class="about-infu">
              <router-link class="theme-btn black-btn" :to="`/advogados`">
                Leia mais
              </router-link>
              <div class="contact-us">
                <img src="@assets/img/about/03.png" alt="">
                <div class="text">
                  <a target="_blank" :href="getWhatsappLink(`Olá, gostaria de falar com um especialista jurídico`)" title="Falar agora com especialista">
                    <span>Falar com Advogado</span>
                    <h4>(95) 98108-3779</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
</style>
