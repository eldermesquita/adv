<script setup>

defineOptions({
  name: 'InicioHome',
})


import SlideInicio from '@/components/layouts/site/SlideInicio.vue'
import QuemSomos from '@/components/layouts/site/QuemSomos.vue'
import AreaAtuacao from "@/components/layouts/site/AreaAtuacao.vue";
import NoticiaDestaque from "@/components/layouts/site/NoticiaDestaque.vue";
import Equipe from "@/components/layouts/site/Equipe.vue";

</script>

<template>

  <SlideInicio/>
  <AreaAtuacao/>
  <QuemSomos/>
  <Equipe/>
  <keep-alive>
    <NoticiaDestaque/>
  </keep-alive>
</template>
