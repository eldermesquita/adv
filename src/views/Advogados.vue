<script setup>
defineOptions({
  name: 'QuemSomos',
})
import Advogados from "@/dados/advogados.json";
import {useContato} from '@/composable/useContato'
import FalarAgora from "@/components/layouts/site/FalarAgora.vue";

const {getWhatsappLink} = useContato()


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
      <p class="text-center mb-5">Nosso time de advogados é composto por profissionais altamente qualificados e especializados em diversas áreas do Direito.</p>
      <div class="row">
        <template v-for="(item,index) in Advogados" :key="index">
          <div class="single-sidebar-widget fadeInUp">

            <div class="widget_categories">
              <ul>
                <li class="border-bottom">
                  <a target="_blank" :href="getWhatsappLink(`Olá, gostaria de falar com ${item.nome} especialista em ${item.area_atuacao || 'jurídico'}`)" title="Falar agora com especialista">
                    {{ item.nome }} - {{ item.area_atuacao }}
                    <span style="background: linear-gradient(84deg, #4fe07f, #0fd852 100%);  ">
                         <i class="fab fa-whatsapp fa-3x"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <FalarAgora :id="0"/>
</template>
<style scoped>
.cta-2.style-3 .cta-inner {
  background: linear-gradient(84deg, var(--theme) 0%, #1379df 100%);
}

.section-padding {
  padding: 120px 0px 2px 0px;
}

.cta-2 {
  margin-top: -176px;
}

.cta-2.style-3 {
  margin-bottom: -50px;
}

.section-bg {
  background-color: #f3f8ff00 !important;
}

.service-2 .service-inner {
  padding-bottom: 98px !important;
}
</style>
