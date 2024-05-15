import { handleClipboard } from "@/component-helper/utils/utils";
import { getText } from "@/service";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.less";

export default function HomePage() {
  const [text, setText] = useState<string>("");
  const [text1, setText1] = useState<string>("");
  const getData = useCallback(() => {
    getText().then((res: any) => {
      let copyText = res.data.filter(
        (item: any) => item.name == "promotionCopy1"
      )[0].value;
      console.log(res,'==>')
      let text1 = res.data.filter(
        (item: any) => item.name == "prohibitedItems"
      )[0].value;
      setText(copyText);
      setText1(text1);
    });
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        1)copt this text :(all blue words)
        <p id="text">{text}</p>
        <div
          className={styles.copy_btn}
          onClick={(e) => handleClipboard(e, text)}
        >
          copy
        </div>
        <div className={styles.content}>
          2) go to:
          <div className={styles.textContent} dangerouslySetInnerHTML={{ __html:  text1}}></div>
        </div>
      </div>
    </div>
  );
}
