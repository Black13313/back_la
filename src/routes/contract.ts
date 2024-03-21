export default [ 
    {
        name: "Contract",
        path: "/contract",
        component: () => import("../pages/contract/Contract.vue"),
        meta: {
          title: "Contract Page",
          requireAuth: true
        },
      },
]