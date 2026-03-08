<script setup>
defineOptions({
  name: 'MenuNav',
})
import {computed, nextTick, onMounted} from 'vue'
import {useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()

const menus = computed(() => {
  const layoutPublico = router.options.routes.find((r) => r.component && r.children)

  if (!layoutPublico) return []

  return layoutPublico.children
    .filter((r) => r.meta?.exibir)
    .map((r) => ({
      ...r,
      children: r.children?.filter((c) => c.meta?.exibir) || [],
    }))
})

const isActive = (menu) => {
  return route.path === router.resolve(menu).path
}
import $ from 'jquery'

window.$ = window.jQuery = $

import '@assets/css/animate.css'
import '@assets/css/meanmenu.css'
import '@assets/js/jquery.meanmenu.min.js'

onMounted(async () => {
  try {
    await nextTick()
    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    if ($(".masonry-layout").length) {
      $(".masonry-layout").imagesLoaded(function () {
        $(".masonry-layout").isotope({
          layoutMode: "masonry"
        });
      });
    }
    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    //>> Sidebar Toggle Js Start <<//
    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: '1199',
      meanExpand: ['<i class="fas fa-plus"></i>'],
    })

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

    //>> Search Popup Start <<//
    const $searchWrap = $('.search-wrap')
    const $navSearch = $('.nav-search')
    const $searchClose = $('#search-close')

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

    $(document.body).on('click', function (e) {
      closeSearch()
    })

    $('.search-trigger, .main-search-input').on('click', function (e) {
      e.stopPropagation()
    })

    function loader() {
      $(window).on('load', function () {
        // Animate loader off screen
        $(".preloader").addClass('loaded');
        $(".preloader").delay(600).fadeOut();
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
            <li v-for="menu in menus" :key="menu.name" :class="{ active: isActive(menu) }">
              <!-- ITEM SEM SUBMENU -->
              <router-link v-if="!menu.children.length" :to="{ name: menu.name }">
                {{ menu.meta.titulo }}
              </router-link>

              <!-- ITEM COM SUBMENU -->
              <a v-else href="javascript:void(0)">
                {{ menu.meta.titulo }}
                <i class="fas fa-angle-down"></i>
              </a>

              <ul class="submenu" v-if="menu.children.length">
                <li v-for="child in menu.children" :key="child.name">
                  <router-link :to="{ name: child.name }">
                    {{ child.meta.titulo }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

        </nav>
      </div>
    </div>
    <a href="#" class="search-trigger search-icon"><i class="fas fa-search"></i></a>
    <div class="header-button  d-none d-sm-block">
      <a href="#" class="theme-btn-whatsapp black-btn ">
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

/*.theme-btn-whatsapp.black-btn::before, .theme-btn-whatsapp.black-btn::after {
  background-color: #051bff;
}

.theme-btn-whatsapp::after {
  left: 0%;
  bottom: 0%;
}*/

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
