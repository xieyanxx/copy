import request from "@/component-helper/utils/axios";

// 获取文本详情
export const getText = () => {
  return request("/api/teConfig/copy", "get", {});
};

export const login = (data: any) => {
  return request("/api/adminUser/login", "post", data);
};
export const getConfig = () => {
  return request("/api/teConfig/configs", "get", {});
};
export const changeConfigAll = (data: any) => {
  return request("/api/teConfig/updateBatch", "post", data);
};

