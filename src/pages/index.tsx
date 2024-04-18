import { handleClipboard } from "@/component-helper/utils/utils";
import { getText } from "@/service";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.less";

export default function HomePage() {
  const [text, setText] = useState<string>("121212121");
  const getData = useCallback(() => {
    getText().then((res: any) => {
      let copyText = res.data.filter(
        (item: any) => item.name == "promotionCopy1"
      )[0].value;
      setText(copyText);
      console.log(res);
    });
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <p id="text">{text}</p>
        <div
          className={styles.copy_btn}
          onClick={(e) => handleClipboard(e, text)}
        >
          copy
        </div>
      </div>
    </div>
  );
}
