import { defineConfig } from "umi";
const base = "/";
const ENV = (process.argv[3] || "DEV") as keyof typeof API_MAP;
const API_MAP = {
  DEV: "http://104.252.76.134:18085",
  TEST: "http://104.252.76.134:18085",
  PROD: "http://104.252.76.134:18085",
};

export default defineConfig({
  title: "",
  links: [{ rel: "icon", href: "" }],
  routes: [
    { path: "/", component: "index" },
    {
      layout: false,
      path: '/login',
      component: '@/pages/login',
    },
    { path: "/config", component: "@/pages/textManage" },
    { redirect: "/login" },
  ],
  define: {
    BASEURL: base,
    ENV,
    API_HOST: API_MAP[ENV],
  },
  npmClient: "yarn",
});
