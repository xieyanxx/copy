import { handleClipboard } from "@/component-helper/utils/utils";
import { getText } from "@/service";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.less";

export default function HomePage() {
  const [text, setText] = useState<string>("");
  // const [text1, setText1] = useState<string>("");
  const getData = useCallback(() => {
    getText().then((res: any) => {
      let copyText = res.data.filter(
        (item: any) => item.name == "promotionCopy1"
      )[0].value;
      // let copyText1 = res.data.filter(
      //   (item: any) => item.name == "prohibitedItems"
      // )[0].value;
      setText(copyText);
      // setText1(copyText1);
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
          <a
            href="https://twitter.com/compose/post"
            target="_blank"
            className={styles.link}
          >
            https://twitter.com/compose/post
          </a>
          <p className={styles.text}>
            3) On proof 1 you must provide your correct tweet URL to get paid.
            <br />
            <br />
            ❌Don't create multiple accounts <br /> ❌ Don't use VPN or proxy
            <br /> ❌ Don't use dot mail or Outlook Mail
          </p>
        </div>
      </div>
    </div>
  );
}
