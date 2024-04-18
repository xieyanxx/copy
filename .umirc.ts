import { defineConfig } from "umi";
const base = "/";
const ENV = (process.argv[3] || "DEV") as keyof typeof API_MAP;
const API_MAP = {
  DEV: "http://104.252.76.134:18085",
  TEST: "http://104.252.76.134:18085",
  PROD: "http://104.252.76.134:18085",
};

export default defineConfig({
  title: "nexus-coin",
  links: [{ rel: "icon", href: "./logo2.png" }],
  routes: [{ path: "/", component: "index" }, { redirect: "/" }],
  define: {
    BASEURL: base,
    ENV,
    API_HOST: API_MAP[ENV],
  },
  npmClient: "yarn",
});
