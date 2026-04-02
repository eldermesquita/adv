<script setup>
defineOptions({
  name: 'MenuNav',
})
import {nextTick, onMounted} from 'vue'
import {primeiraLetraMaiuscula, slugUrl} from "@/utils/funcoes.js";
import $ from 'jquery'
import AreaAtuacao from '@/dados/areaAtuacao.json'
import '@assets/js/jquery.meanmenu.min.js'
import '@assets/css/meanmenu.css'
import { useContato } from '@/composable/useContato'
const { getWhatsappLink } = useContato()

globalThis.$ = globalThis.jQuery = $

onMounted(async () => {
  try {
    await nextTick()

    const $headerSticky = "#header-sticky"
    const masonryLayout = ".masonry-layout"
    const $searchWrap = $('.search-wrap')
    const $navSearch = $('.nav-search')
    const $searchClose = $('#search-close')

    $(globalThis).on("scroll", function () {
      if ($(this).scrollTop() > 250) {
        $($headerSticky).addClass("sticky");
      } else {
        $($headerSticky).removeClass("sticky");
      }
    });

    if ($(masonryLayout).length) {
      $(masonryLayout).imagesLoaded(function () {
        $(masonryLayout).isotope({
          layoutMode: "masonry"
        });
      });
    }


    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });


    $('.offcanvas__close,.offcanvas__overlay').on('click', function () {
      $('.offcanvas__info').removeClass('info-open')
      $('.offcanvas__overlay').removeClass('overlay-open')
    })
    $('.sidebar__toggle').on('click', function () {
      $('.offcanvas__info').addClass('info-open')
      $('.offcanvas__overlay').addClass('overlay-open')
    })

    $('.body-overlay').on('click', function () {
      $('.offcanvas__area').removeClass('offcanvas-opened')
      $('.df-search-area').removeClass('opened')
      $('.body-overlay').removeClass('opened')
    })


    $('.search-trigger').on('click', function (e) {
      e.preventDefault()
      $searchWrap.animate({opacity: 'toggle'}, 500)
      $navSearch.add($searchClose).addClass('open')
    })

    $('.search-close').on('click', function (e) {
      e.preventDefault()
      $searchWrap.animate({opacity: 'toggle'}, 500)
      $navSearch.add($searchClose).removeClass('open')
    })

    function closeSearch() {
      $searchWrap.fadeOut(200)
      $navSearch.add($searchClose).removeClass('open')
    }

    $(document.body).on('click', function () {
      closeSearch()
    })

    $('.search-trigger, .main-search-input').on('click', function (e) {
      e.stopPropagation()
    })

    function loader() {
      const $preloader = ".preloader"
      $(globalThis).on('load', function () {
        $($preloader).addClass('loaded');
        $($preloader).delay(600).fadeOut();
      });
    }

    loader();

  } catch (error) {
    console.error('Erro ao carregar o menu ', error)
  }
})
</script>

<template>

  <div class="header-right">
    <div class="mean__menu-wrapper">
      <div class="main-menu">
        <nav id="mobile-menu">
          <ul>
            <li>
              <router-link :to="`/`">
                Início
              </router-link>
            </li>
            <li>
              <a href="javascript:void(0)">Áreas de atuação
                <i class="fas fa-angle-down"></i>
              </a>
              <ul class="submenu">
                <li v-for="menu in AreaAtuacao" :key="menu.name">
                  <router-link v-if="menu.exibir" :to="`/areas-de-atuacao/${menu.id}/${slugUrl(menu.titulo)}`">
                    {{ primeiraLetraMaiuscula(menu.titulo) }}
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link :to="`/noticias`">
                Artigos Blog
              </router-link>
            </li>
            <li>
              <router-link :to="`/quem-somos`">
                Quem Somos
              </router-link>
            </li>
          </ul>
        </nav>

      </div>
    </div>
    <div class="header-button  d-none d-sm-block">
      <a :href="getWhatsappLink()" target="_blank"  class="theme-btn-whatsapp black-btn ">
        whatsapp
      </a>
    </div>
    <div class="header__hamburger d-xl-none my-auto">
      <div class="sidebar__toggle">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </div>

</template>

<style>
.theme-btn-whatsapp {
  position: relative;
  z-index: 2;
  vertical-align: middle;
  display: inline-block;
  border: none;
  text-transform: capitalize;
  text-align: center;
  background: linear-gradient(84deg, #4FE07F 0%, #4FE07F 100%);
  color: var(--white);
  font-size: 17px;
  font-weight: 700;
  line-height: 1;
  padding: 18px 35px;
  max-height: 54px;
  border-radius: 4px;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  -webkit-appearance: none;
  outline: none !important;
  overflow: hidden;
  cursor: pointer;
}


.theme-btn-whatsapp::before, .theme-btn-whatsapp::after {
  content: "";
  width: 50%;
  height: 0%;
  position: absolute;
  background-color: var(--white);
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
  z-index: -1;
}
</style>
