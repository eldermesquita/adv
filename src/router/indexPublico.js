import { primeiraLetraMaiuscula } from '@/utils/funcoes'
const publico = {
  path: '/',
  name: 'Layouts',
  component: () => import('@/components/layouts/site/IndexPublico.vue'),
  meta: {
    requiresAuth: false,
    public: true,
  },
  children: [
    /* ================= HOME ================= */
    {
      path: '/',
      name: 'Início',
      component: () => import('@/views/Inicio.vue'),
      meta: {
        titulo: 'Início',
        icone: 'pi pi-fw pi-home',
        exibir: true,
      },
    },
    {
      path: 'areas-de-atuacao',
      name: 'Áreas de atuação',
      meta: {
        titulo: 'Áreas de atuação',
        exibir: true,
      },
      children: [
        {
          path: ':id/:titulo',
          name: 'PAGINA',
          component: () => import('@/views/Pagina.vue'),
          props: (route) => ({
            id: Number(route.params.id),
            titulo: route.params.titulo,
          }),
          beforeEnter: (to) => {
            to.meta.titulo = primeiraLetraMaiuscula(to.params.titulo)
            to.name = primeiraLetraMaiuscula(to.params.titulo)
          },
          meta: {
            titulo: 'PÁGINA DE CONTEUDO',
            descricao: "Atuação na defesa e acompanhamento de processos criminais, oferecendo assessoria jurídica em inquéritos policiais, audiências de custódia, habeas corpus, recursos e demais medidas judiciais. Compromisso com a ampla defesa, o contraditório e a garantia dos direitos fundamentais do cliente.",
            icone: "fi fi-sr-scale",
            exibir: false
          }
        },
      /*  {
          path: 'previdenciario-familia',
          name: 'PREVIDENCIÁRIO / FAMÍLIA',
          component: () => import('@/views/Pagina.vue'),
          meta: {
            titulo: 'Previdenciários',
            descricao: "Assessoria completa em benefícios previdenciários, aposentadorias, pensões e auxílios junto ao INSS. Na área de família, atuação em divórcios, guarda, pensão alimentícia, inventários e regulamentação de visitas, sempre com sensibilidade e foco na solução humanizada dos conflitos.",
            icone: "fi fi-sr-home-heart",
            exibir: true
          }
        },
        {
          path: 'trabalhista',
          name: 'TRABALHISTA',
          component: () => import('@/views/Pagina.vue'),
          meta: {
            titulo: 'Trabalhistas',
            descricao: "Defesa dos direitos de trabalhadores e empregadores em reclamações trabalhistas, rescisões contratuais, verbas rescisórias, assédio moral, horas extras e acordos judiciais e extrajudiciais. Atuação estratégica para garantir segurança jurídica nas relações de trabalho.",
            icone: "fi fi-sr-briefcase",
            exibir: true,
          }
        },
        {
          path: 'bancario',
          name: 'BANCÁRIO',
          component: () => import('@/views/Pagina.vue'),
          meta: {
            titulo: 'Trabalhistas',
            descricao: "ADVOGADA PARCEIRA. Atuação especializada em revisão de contratos bancários, juros abusivos, renegociação de dívidas, ações contra instituições financeiras e defesa do consumidor em questões relacionadas a empréstimos, financiamentos e cobranças indevidas.",
            icone: "fi fi-sr-bank",
            exibir: true
          }
        },
        {
          path: 'civil-consumidor',
          name: 'CIVIL / CONSUMIDOR',
          component: () => import('@/views/Pagina.vue'),
          meta: {
            titulo: 'Consumidor',
            descricao: "Atuação em responsabilidade civil, indenizações por danos morais e materiais, elaboração e revisão de contratos, cobranças, além da defesa dos direitos do consumidor em casos de vícios de produto, falhas na prestação de serviço e práticas abusivas.",
            icone: "fi fi-sr-document",
            exibir: true
          }
        }*/
      ],
    },
    {
      path: 'noticias',
      name: 'Artigos',
      component: () => import('@/views/Contato.vue'),
      meta: {
        titulo: 'Artigos Blog',
        exibir: true,
      },
    },
    {
      path: 'quem-somos',
      name: 'Quem Somos',
      component: () => import('@/views/Contato.vue'),
      meta: {
        titulo: 'Quem Somos',
        exibir: true,
      },
    },
    /* ================= ERROS ================= */
    {
      path: '403',
      name: 'Acesso Negado',
      component: () => import('@/views/403.vue'),
      meta: { titulo: 'Acesso Negado', exibir: false },
    },
    {
      path: ':pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404.vue'),
      meta: { titulo: 'Página não encontrada', exibir: false },
    },
  ],
}

export default publico
