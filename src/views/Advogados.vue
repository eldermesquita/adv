<script setup>
defineOptions({
  name: 'QuemSomos',
})
import Equipe from "@/components/layouts/site/Equipe.vue";
import Advogados from "@/dados/advogados.json";
import {useContato} from '@/composable/useContato'

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
  <section class="faq-wrapper faq-1 style-2 section-padding pb-5 mb-5">
    <div class="container">
      <div class="section-title text-center">

        <h2>Perguntas frequentes
          <br> Sobre nós</h2>
      </div>
      <div class="row g-5">

        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="faq-content me-xl-4 mt-xl-5">
            <div class="faq-accordion mt-4 mt-md-0 ">
              <div class="accordion" id="accordion">
                <div class="accordion-item fadeInUp" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s;">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                      Quanto custa contratar um advogado?
                    </button>
                  </h4>
                  <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div class="accordion-body">
                      Os honorários advocatícios variam bastante conforme a complexidade do caso, experiência do profissional e região. Pode ser cobrado por hora (R$ 300 a R$ 1.500+), valor fixo por
                      serviço, ou percentual sobre o êxito da causa (geralmente 20% a 30%). Consultas iniciais muitas vezes são gratuitas.
                    </div>
                  </div>
                </div>
                <div class="accordion-item fadeInUp" data-wow-delay=".7s" style="visibility: visible; animation-delay: 0.7s;">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                      Quando devo procurar um advogado?
                    </button>
                  </h4>
                  <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div class="accordion-body">
                      Procure um advogado sempre que enfrentar questões legais como: disputas trabalhistas, acidentes com danos, divórcio, questões criminais, compra/venda de imóveis, abertura de
                      empresa, problemas com dívidas, ou quando precisar revisar contratos importantes.
                    </div>
                  </div>
                </div>
                <div class="accordion-item fadeInUp" data-wow-delay=".7s" style="visibility: visible; animation-delay: 0.7s;">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                      Qual a diferença entre advogado e defensor público?
                    </button>
                  </h4>
                  <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div class="accordion-body">
                      O advogado é contratado e pago pelo cliente, enquanto o defensor público é um servidor do Estado que atende gratuitamente pessoas que não têm condições de pagar por um advogado
                      particular, mediante comprovação de hipossuficiência econômica.
                    </div>
                  </div>
                </div>
                <div class="accordion-item fadeInUp" data-wow-delay=".7s" style="visibility: visible; animation-delay: 0.7s;">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                      O advogado pode garantir que vou ganhar a causa?
                    </button>
                  </h4>
                  <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div class="accordion-body">
                      Não. É antiético e proibido pelo Código de Ética da OAB que advogados garantam resultados. O advogado pode avaliar as chances de êxito com base em sua experiência e análise do
                      caso, mas o resultado final depende do juiz e das provas apresentadas.
                    </div>
                  </div>
                </div>
                <div class="accordion-item fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s;">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                      Quais áreas de atuação um advogado pode ter?
                    </button>
                  </h4>
                  <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div class="accordion-body">
                      As principais são: Direito Civil, Trabalhista, Criminal, Família, Tributário, Empresarial, Previdenciário, Imobiliário, Consumidor, Ambiental, entre outras. Muitos advogados se
                      especializam em uma ou poucas áreas específicas.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="faq-content ms-xl-4 mt-xl-5">
            <div class="faq-accordion mt-4 mt-md-0 ">
              <div class="accordion" id="accordion2">
                <div class="accordion-item fadeInUp" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s;">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                      Como saber se um advogado é confiável?
                    </button>
                  </h4>
                  <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#accordion2">
                    <div class="accordion-body">
                      Verifique se ele está regularmente inscrito na OAB (pelo site da OAB), pesquise avaliações e recomendações, confira sua experiência na área do seu caso, observe a clareza na
                      comunicação e se ele apresenta um contrato de honorários por escrito.
                    </div>
                  </div>
                </div>
                <div class="accordion-item fadeInUp" data-wow-delay=".7s" style="visibility: visible; animation-delay: 0.7s;">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7" aria-expanded="false" aria-controls="faq7">
                      Advogado pode atuar em todo o Brasil?
                    </button>
                  </h4>
                  <div id="faq7" class="accordion-collapse collapse" data-bs-parent="#accordion2">
                    <div class="accordion-body">
                      Sim. Um advogado inscrito na OAB pode atuar em todo território nacional, mas precisa estar em situação regular. Para atuar em outro estado, ele pode fazer o processo de
                      transferência ou manter inscrição suplementar.
                    </div>
                  </div>
                </div>
                <div class="accordion-item fadeInUp" data-wow-delay=".7s" style="visibility: visible; animation-delay: 0.7s;">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq8" aria-expanded="false" aria-controls="faq8">
                      O que é OAB e por que é importante?
                    </button>
                  </h4>
                  <div id="faq8" class="accordion-collapse collapse" data-bs-parent="#accordion2">
                    <div class="accordion-body">
                      A Ordem dos Advogados do Brasil (OAB) é a entidade que regulamenta e fiscaliza a profissão de advogado no Brasil. Todo advogado precisa ser aprovado no Exame da Ordem e estar
                      inscrito na OAB para exercer a advocacia legalmente.
                    </div>
                  </div>
                </div>
                <div class="accordion-item fadeInUp" data-wow-delay=".7s" style="visibility: visible; animation-delay: 0.7s;">
                  <h4 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq9" aria-expanded="false" aria-controls="faq9">
                      Posso trocar de advogado durante o processo?
                    </button>
                  </h4>
                  <div id="faq9" class="accordion-collapse collapse" data-bs-parent="#accordion2">
                    <div class="accordion-body">
                      Sim, você tem total liberdade para trocar de advogado a qualquer momento. Basta revogar a procuração do atual e constituir um novo. É recomendável fazer isso de forma organizada
                      para não prejudicar o andamento do processo.
                    </div>
                  </div>
                </div>
                <div class="accordion-item fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s;">
                  <h4 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq10" aria-expanded="true" aria-controls="faq10">
                      O que fazer se tiver problemas com meu advogado?
                    </button>
                  </h4>
                  <div id="faq10" class="accordion-collapse collapse show" data-bs-parent="#accordion2">
                    <div class="accordion-body">
                      Primeiro, tente resolver diretamente com ele. Se não funcionar, você pode fazer uma reclamação na OAB do seu estado, que tem poder disciplinar sobre os advogados. Em casos de
                      dano material, pode também entrar com ação judicial de indenização.<br>Essas perguntas refletem as principais dúvidas de quem busca serviços jurídicos. Se precisar de
                      informações mais específicas sobre algum tema, é só me avisar!
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
  <section class="cta-wrapper cta-2 style-3 section-padding pb-0 section-bg">
    <div class="container">
      <div class="cta-inner "
           data-aos-offset="120"
           data-aos-easing="ease-in-out"
           data-aos-once="true"
           data-aos="slide-left"
           data-aos-delay="300"
           data-aos-duration="300">
        <div class="icon"><i class="flaticon-customer-support"></i></div>
        <div class="title">
          <h3 class="split-text right">
            <div class="split-line">
              Você está enfrentando problemas?
            </div>
          </h3>
          <p>Atendimento especializado de forma Online em todo brasil</p>
          <p> e presencial em todo Estado de Roraima </p>
        </div>
        <a :href="getWhatsappLink(`Olá, gostaria de falar com um especialista jurídico}`)"
           target="_blank" class="theme-btn white-btn">Falar agora com especialista</a>
      </div>
    </div>
  </section>
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
