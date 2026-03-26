<script setup>
import {computed, nextTick, onMounted} from 'vue'
import {RouterLink, useRouter} from 'vue-router'
import AOS from 'aos'

import $ from 'jquery'
import AreaAtuacao from "@/dados/areaAtuacao.json";
import {primeiraLetraMaiuscula, slugUrl} from "@/utils/funcoes.js";

window.$ = window.jQuery = $
const router = useRouter()

const areaAtuacaoRoutes = computed(() => {
  // acha a rota "pai" (areas-de-atuacao)
  const parent = router
    .getRoutes()
    .find(
      (r) =>
        r.path === '/areas-de-atuacao' ||
        r.name === 'Áreas de atuação' ||
        r.meta?.titulo === 'Áreas de atuação',
    )

  // lista apenas as rotas filhas com meta.exibir === true
  return (parent?.children ?? []).filter((r) => r.meta?.exibir)
})
onMounted(async () => {
  try {
    await nextTick()
    AOS.refresh()

    function mousecursor() {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }

    $(function () {
      mousecursor();
    });

    const scrollPath = document.querySelector(".scroll-up path");

    if (!scrollPath) {
      // Em SPA (Vue), o DOM pode ainda não ter renderizado o SVG quando este script roda.
      // Então simplesmente não inicializamos o "scroll-up" nesta página/momento.
      return;
    }

    const pathLength = scrollPath.getTotalLength();
    scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
    scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
    scrollPath.style.strokeDashoffset = pathLength;
    scrollPath.getBoundingClientRect();
    scrollPath.style.transition = scrollPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

    const updatescroll = function () {
      let scrolltotal = $(window).scrollTop();
      let height = $(document).height() - $(window).height();
      let scrolltotalheight = pathLength - (scrolltotal * pathLength) / height;
      scrollPath.style.strokeDashoffset = scrolltotalheight;
    };
    updatescroll();

    $(window).scroll(updatescroll);
    const offset = 50;
    const duration = 950;

    $(window).on("scroll", function () {
      // eslint-disable-next-line no-undef
      if (jQuery(this).scrollTop() > offset) {
        // eslint-disable-next-line no-undef
        jQuery(".scroll-up").addClass("active-scroll");
      } else {
        // eslint-disable-next-line no-undef
        jQuery(".scroll-up").removeClass("active-scroll");
      }
    });


    $(".scroll-up").on("click", function (event) {
      event.preventDefault();
      // eslint-disable-next-line no-undef
      jQuery("html, body").animate({
          scrollTop: 0,
        },
        900
      );
      return false;
    });


    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    $('.video-popup').magnificPopup({
      type: 'iframe',
      callbacks: {}
    });

  } catch (error) {
    console.error('Erro ao carregar o rodapé ', error)
  }
})
</script>

<template>

  <!-- Back To Top Start -->

  <div class="scroll-up">
    <svg class="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <i class="fa-solid fa-angles-up"></i>
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition: stroke-dashoffset 10ms linear; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 307.919;"></path>
    </svg>
  </div>
  <!-- Footer Section Start -->
  <footer class="footer-wrapper section-bg-2">
    <div class="container">
      <div class="footer-widgets-1 style-2  section-padding ">
        <div class="row g-5">
          <div class="col-xl-6 col-lg-6"
               data-aos="slide-up"
               data-aos-delay="300"
               data-aos-duration="800">
            <div class="single-footer-widget me-xxl-5 pe-xxl-4">
              <div class="widget-head">
                <router-link :to="{ name: 'Início' }">
                  <img src="@assets/img/logo/white-logo-2.svg" width="200px" alt="Logo Carvalho Advocacia">
                </router-link>
              </div>
              <div class="footer-content">
                <p>
                  Fundado em 2016, o Carvalho Advocacia é um dos promisor
                  escritórios de advocacia de Boa Vista RR, com atuação em todo território nacional.
                  Ao longo de sua trajetória, atuando no Direito Criminal, o escritório mantém ativa sua vocação
                  em resolver conflitos, buscando a liberdade alheia com a advocacia artesanal e o mais alto
                  padrão de qualidade e excelência.
                </p>
                <h5> SOCIEDADE UNIPESSOAL DE ADVOCACIA - OAB/RR 127</h5>

                <div class="social-icon d-flex align-items-center">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6"
               data-aos="slide-left"
               data-aos-delay="300"
               data-aos-duration="800">
            <div class="single-footer-widget ms-xxl-4 ps-xxl-3">
              <div class="widget-head">
                <h4>Àreas de atuação</h4>
              </div>
              <ul class="list-area">

                  <li v-for="menu in AreaAtuacao" :key="menu.name">
                    <router-link v-if="menu.exibir"  style="color:#FFFFFF" :to="`/areas-de-atuacao/${menu.id}/${slugUrl(menu.titulo)}`">
                      <i class="fas fa-circle"></i>
                      {{ primeiraLetraMaiuscula(menu.titulo) }}
                    </router-link>
                  </li>


              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6" data-aos="slide-left"
               data-aos-delay="300"
               data-aos-duration="800">
            <div class="single-footer-widget ms-xxl-3">
              <div class="widget-head">
                <h4>Entrar em contato</h4>
              </div>
              <div class="footer-content">
                <div class="contact-info-area">
                  <div class="contact">
                    <a href="#"><i class="fas fa-map-marker-alt"></i></a>
                    <div class="contact-infu">
                      <span>Endereço: </span>
                      <h5>Rua Mestre Albano, 3730, Asa branca, Boa Vista, RR, 69312-298</h5>
                    </div>
                  </div>
                  <div class="contact">
                    <a href="#"><i class="fi-br-email-pending"></i></a>
                    <div class="contact-infu">
                      <span>Email: </span>
                      <h5 class="text-lowercase">carvalhoadvocaciarr@gmail.com </h5>
                    </div>
                  </div>
                  <div class="contact">
                    <a href="#"><i class="fas fa-phone-alt"></i></a>
                    <div class="contact-infu">
                      <span> Telefone:</span>
                      <h5>(95) 98108-3779 </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom style-2">
      <div class="container">
        <div class="footer-bottom-wrapper d-flex align-items-center justify-content-between">
          <p data-aos="slide-left"
             data-aos-delay="300"
             data-aos-duration="800">
            Copyright © {{ new Date().getFullYear() }} Carvalho Advocacia
          </p>
          <div class="security"
               data-aos="slide-right"
               data-aos-delay="300"
               data-aos-duration="800">
            <p>
              Feito com
              <svg aria-labelledby='svg-inline--fa-title-42hdexGZnbvO' data-prefix='fas' data-icon='heart' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'
                   class='svg-inline--fa fa-heart fa-w-16'>
                <title id='svg-inline--fa-title-42hdexGZnbvO'>Amor</title>
                <path fill='currentColor'
                      d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
                      class=''></path>
              </svg> &amp;
              <svg aria-labelledby='svg-inline--fa-title-0OMIlrrQMKA9' data-prefix='fas' data-icon='coffee' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'
                   class='svg-inline--fa fa-coffee fa-w-20'><title id='svg-inline--fa-title-0OMIlrrQMKA9'>café</title>
                <path fill='currentColor'
                      d='M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z'
                      class=''></path>
              </svg>
              By <a href="javascript:void(0); " style="color:#FFFFFF" onclick="window.open('http://www.eldermesquita.com.br/');"> e-design </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>
