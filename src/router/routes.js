const routes = [
  {
    path: "/",
    component: () => import("layouts/FirstPage.vue"),
  },

  {
    path: "/painel",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/painel/dashboard",
        component: () => import("pages/dashboard/DashboardPage.vue"),
      },
      {
        path: "/painel/fase-grupo",
        component: () => import("pages/grupo/GrupoPage.vue"),
      },
      {
        path: "/painel/ranking",
        component: () => import("pages/ranking/RankingPage.vue"),
      },
      {
        path: "/painel/fase-eliminatorias",
        component: () => import("pages/grupo/EliminatoriasPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
