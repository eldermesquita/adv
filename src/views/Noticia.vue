<script setup>
defineOptions({
  name: 'NoticiasDetalhes',
})

import LinkLadoDireito from '@/components/LinksLadoDireito.vue'
</script>

<template>
  <section class="news-details fix section-padding">
    <div class="container">
      <div class="news-details-area">
        <div class="row g-5">
          <h2>TCERR participa da inauguração do Centro de Atendimento Integrado 18 de Maio</h2>
          <div class="col-12 col-lg-8">
            <div class="blog-post-details">
              <div class="single-blog-post">
                <div class="bg-cover post-featured-thumb thumb-noticia"></div>
                <div class="post-content">
                  <ul class="post-list d-flex align-items-center">
                    <li>
                      <i class="fa-regular fa-user"></i>
                      SESCON
                    </li>
                    <li>
                      <i class="fa-solid fa-calendar-days"></i>
                      05 Fevereiro, 2025
                    </li>
                    <li>
                      <i class="fa-solid fa-tag"></i>
                      Categoria
                    </li>
                  </ul>

                  <p class="mb-3">
                    Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis
                    aute irure and dolor in reprehenderit.
                  </p>
                  <p class="mb-3">
                    The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta
                    arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus
                    libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac
                    ante rutrum sed the is sodales augue consequat.
                  </p>
                  <p>
                    Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis
                    convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra
                    bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat
                    auctor.
                  </p>
                  <div class="mt-4 mb-4 hilight-text">
                    <p>
                      Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel
                      ultricies <br />
                      urnacondimentum, sapien neque lobortis tortor, quis efficitur mi ipsum eu
                      metus. Praesent eleifend <br />
                      orci sit amet est vehicula.
                    </p>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z"
                        stroke="#F39F5F"
                      ></path>
                      <path
                        d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z"
                        stroke="#F39F5F"
                      ></path>
                    </svg>
                  </div>
                  <p class="mt-4 mb-5">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
                    in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
                    consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
                    imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                    Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                    Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam
                    condimentum, vel euismod erat placerat. In iaculis arcu eros.
                  </p>
                  <div class="row g-4">
                    <div class="col-lg-6">
                      <div class="details-image">
                        <img src="@assets/img/news/post-5.jpg" alt="img" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="details-image">
                        <img src="@assets/img/news/post-6.jpg" alt="img" />
                      </div>
                    </div>
                  </div>

                  <p class="pt-5">
                    Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis
                    aute irure and dolor in reprehenderit.Consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim
                    veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in
                    reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <LinkLadoDireito />
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.thumb-noticia {
  background-image: url('@assets/img/news/post-4.jpg');
}
</style>
