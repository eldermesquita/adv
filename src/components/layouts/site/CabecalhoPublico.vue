<script setup>
import { RouterLink } from 'vue-router'
import Menu from "@/components/layouts/site/MenuPublico.vue";
</script>

<template>

  <!-- Header Section Start -->
  <header>
    <div id="header-sticky" class="header-1">
      <div class="container">
        <div class="mega-menu-wrapper">
          <div class="header-main ">
            <div class="header-left">
              <div class="logo">
                <router-link class="header-logo" :to="{ name: 'Início' }">
                  <img src="@assets/img/logo/azul-logo-1.svg" width="200px" alt="Logo Carvalho Advocacia">
                </router-link>
              </div>
            </div>
            <Menu/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


