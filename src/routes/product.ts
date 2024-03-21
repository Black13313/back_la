export default [
  {
    name: "ProductPage",
    path: "/product",
    component: () => import("../pages/product/ProductPage.vue"),
    meta: {
      title: "Product Page",
      requireAuth: true
    },
  },
  {
    name: "ProductCcategoryPage",
    path: "/product/category",
    component: () => import("../pages/product/category/CategoryPage.vue"),
    meta: {
      title: "Product Page",
      requireAuth: true
    },
  },
];
