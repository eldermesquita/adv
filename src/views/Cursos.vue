<script setup>
defineOptions({
  name: 'CursosCapacitacao',
})
import { ref } from 'vue'
import CursosJson from '@/json/cursosCapacitacoes.json'

const efeitosAOS = [
  'slide-up',
  'fade-up',
  'fade-down',
  'slide-left',
  'fade-right',
  'fade-up-right',
  'fade-up-left',
  'zoom-out',
  'fade-down-left',
]

function getRandomAosEffect() {
  return efeitosAOS[Math.floor(Math.random() * efeitosAOS.length)]
}

const cursos = ref(
  CursosJson.map((curso) => ({
    ...curso,
    aos: getRandomAosEffect(),
  })),
)
</script>

<template>
  <section class="faq-section fix section-padding">
    <div class="container">
      <div
        class="section-title text-center"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="300"
      >
        <span>Lista de Cursos e Capacitações</span>
      </div>
      <div class="faq-wrapper">
        <div class="row g-4">
          <div class="col-lg-12">
            <div class="tab-content">
              <div id="trust" class="tab-pane fade active show" role="tabpanel">
                <div class="faq-content">
                  <div class="faq-accordion">
                    <div class="accordion" id="accordion">
                      <div
                        v-for="(curso, index) in cursos"
                        :key="index"
                        class="accordion-item mb-3"
                        :data-aos="curso.aos"
                        :data-aos-delay="`${index + 1}00`"
                        data-aos-duration="300"
                      >
                        <h5 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            :data-bs-target="`#faq${index}`"
                            :aria-controls="`faq${index}`"
                          >
                            {{ curso.titulo }}
                          </button>
                        </h5>
                        <div
                          :id="`faq${index}`"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div class="accordion-body">
                            <div class="col-lg-12">
                              <div class="program-author-items">
                                <div class="content">
                                  <ul>
                                    <li>{{ curso.subtitulo }}</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li>
                                      <a class="theme-btn" :href="curso.link" :target="curso.target"
                                        ><i class="fa-solid fa-eye"></i> Visualizar
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
.faq-content .program-author-items .content ul {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 50px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 20px 0;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
}

.faq-content .program-author-items .content {
  min-width: 110% !important;
}
</style>
