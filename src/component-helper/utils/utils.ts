import { message } from "antd";
import ClipboardJS from "clipboard";
const Utils = {
  isIos() {
    return /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
  },
  isAndroid() {
    return /Android/i.test(window.navigator.userAgent);
  },
};

export default Utils;

export function handleClipboard(event: any, text: string) {
  const clipboard = new ClipboardJS(event.target, {
    text: () => text,
  });
  console.log(clipboard);
  clipboard.on("success", () => {
    message.success("copy success");
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    message.error("copy fail");
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
