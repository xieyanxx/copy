import request from "@/component-helper/utils/axios";

// 获取文本详情
export const getText = () => {
  return request("/api/teConfig/copy", "get", {});
};
