<script setup>
defineOptions({
  name: 'LayoutSite',
})
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import Cabecalho from '@components/layouts/site/CabecalhoPublico.vue'
import CarregandoPagina from "@components/CarregandoPagina.vue"
import Rodape from '@components/layouts/site/RodapePublico.vue'
import BreadCrumb from "@components/layouts/site/BreadCrumb.vue"

const rotas = useRoute()
const exibirBreadcrumb = computed(() => {
  return rotas.name !== 'Início'
})
</script>

<template>

  <div>
    <CarregandoPagina/>
    <Cabecalho/>
    <BreadCrumb v-if="exibirBreadcrumb"/>
    <RouterView v-slot="{ Component }">
      <component :is="Component"/>
    </RouterView>
    <Rodape/>
  </div>
</template>

