<script setup>
import {useRoute} from 'vue-router'

const route = useRoute()
import {computed} from 'vue'
import AreaAtuacao from '@/dados/areaAtuacao.json'

const area = computed(() => {
  const id = Number(route.params.id)
  return AreaAtuacao.find(item => item.id === id)
})


const breadcrumbs = computed(() => {
  return route.matched.filter(r => r.meta?.titulo).map(r => ({
    name: r.meta?.titulo,
    path: r.path,
    title: r.name,
  }))
})

</script>

<template>
  <div :class="['breadcrumb-wrapper', route.name === 'Quem Somos' ? 'bg-cover-contato' : 'bg-cover1']">
    <div class="container">
      <div class="page-heading">
        <div class="breadcrumb-sub-title">
          <h1>{{ area?.titulo || breadcrumbs[0]?.name }}</h1>
          <ul class="breadcrumb-items">
            <li>
              <RouterLink to="/">Início</RouterLink>
            </li>
            <template v-for="(item, index) in breadcrumbs" :key="index">
              <li v-if="index === breadcrumbs.length - 2" class="active">
                <i class="fi fi-br-arrow-alt-circle-right"></i>
              </li>

              <li v-if="breadcrumbs[0]?.name !== 'Áreas de atuação'">
                <i class="fi fi-br-arrow-alt-circle-right"></i>
              </li>
              <li v-if="index !== breadcrumbs.length - 2">
                <RouterLink to="">
                  {{ breadcrumbs[0]?.name }}
                </RouterLink>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.breadcrumb-wrapper {
  position: relative;
  overflow: hidden;
  z-index: 9;
  padding: 89px 0;
}

.breadcrumb-wrapper::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  content: "";
  z-index: -1;
}

.bg-cover1 {
  background-image: url('@assets/img/breadcrumb.jpg') !important;
}

.bg-cover-contato {
  background-image: url('@assets/img/breadcrumb-contato.png') !important;
}

</style>
