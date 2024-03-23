export default [ 
    {
        name: "ສັນຍາ",
        path: "/contract",
        component: () => import("../pages/contract/Contract.vue"),
        meta: {
          title: "Contract Page",
          requireAuth: true
        },
      },

    {
        name: "Add_Contract",
        path: "/add_contract",
        component: () => import("../pages/contract/Add_Contarct.vue"),
        meta: {
            title: "Add Contract Page",
            requireAuth: true
        },
    },
]