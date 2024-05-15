import { handleClipboard } from "@/component-helper/utils/utils";
import { changeConfigAll, getConfig, getText } from "@/service";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.less";

import { Button, Flex, Input, message } from "antd";

const { TextArea } = Input;

type items = {
  id: number;
  key: string;
  name: string;
  typeEnum: string;
  typeString: boolean;
  value: string;
};
export default function HomePage() {
  const [textConfig, setTextConfig] = useState<items[]>([]);
  const getData = useCallback(() => {
    getConfig().then((res: any) => {
      const { COPY_WRITING } = res.data;
      let textData = COPY_WRITING
      setTextConfig(textData);
      console.log(res);
    });
  }, []);
  const handleTextChange = (index: number, event: any) => {
    let values: items[] = [...textConfig];
    values[index].value = event.target.value;
    setTextConfig(values);
  };

  const changeConfig=()=>{
    changeConfigAll(textConfig).then((res)=>{
        message.success('success')
    })
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        {textConfig.map((input, index) => (
          <div key={index} className={styles.content} style={{width:'100%'}}>
            <div  className={styles.item}>
              {input.name}
              <TextArea
                style={{ height: 240, resize: "none" }}
                value={input.value}
                onChange={(e) => handleTextChange(index, e)}
              />
            </div>
            <Button  onClick={changeConfig}type="primary">Confirm</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
